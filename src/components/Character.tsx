import { type ChangeEvent } from "react";
import { styled } from "styled-components";

import {
  type Stats,
  type EquipmentSlot,
  useCharacterContext,
} from "../context/CharacterContext";

import type { EquippedArmor, EquippedWeapon } from "../types/item";
import {
  getFortuneImagePath,
  getItemSlotImagePath,
} from "../utils/getImagePath";
import {
  getEquipmentBonuses,
  getTotalStatValues,
} from "../utils/getCharacterInfo";

const CharacterContainer = styled.div`
  min-width: 260px;
  max-width: 260px;

  .stats,
  .equipment,
  .bonuses,
  .fortunes {
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
    padding: 16px;
  }

  .stats {
    label {
      display: flex;
      flex-flow: column nowrap;

      .values {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        input {
          width: 60%;
        }
      }
    }
  }

  .equipment {
    user-select: none;
  }

  .bonuses {
    .stat-bonuses {
      color: ${({ theme }) => theme.colors.stats};
    }
  }

  .equipped-fortunes {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 4px;

    .fortune-tile {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      width: 56px;
      height: 64px;
      user-select: none;

      &:hover {
        outline: 1px solid ${({ theme }) => theme.colors.borderHover};
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const EquippedItem = styled.div<{ $tier: number; $rarity?: number }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: ${({ theme, $rarity }) =>
    $rarity ? theme.colors.rarity[$rarity] : "#777"};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.borderHover};
  }

  .item-slot {
    width: 31px;
    height: 31px;
  }

  .tier-label {
    color: ${({ theme, $tier }) => theme.colors.tier[$tier]};
  }

  .offhand-2h {
    opacity: 50%;
  }

  button {
    border-radius: 0;
    margin-left: auto;
  }
`;

export const Character = () => {
  const {
    stats,
    equipment,
    fortunes,
    unequipItem,
    updateStat,
    unequipFortune,
  } = useCharacterContext();

  function handleUpdateStat(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      updateStat(event.target.name, value);
    }
  }

  const equipmentSlots = Object.entries(equipment) as [
    EquipmentSlot,
    EquippedWeapon | EquippedArmor | null
  ][];

  const equipmentBonuses = getEquipmentBonuses(equipment);
  const totalStatValues = getTotalStatValues(stats, equipment);

  return (
    <CharacterContainer>
      <form className="stats">
        {totalStatValues.map((stat) => {
          const statValue = stats[stat.label.toLowerCase() as keyof Stats];
          return (
            <label key={stat.label}>
              <span>{stat.label}</span>
              <div className="values">
                <input
                  name={stat.label.toLowerCase()}
                  type="number"
                  value={statValue}
                  onChange={handleUpdateStat}
                  min={8}
                />

                <span>{stat.value}</span>
              </div>
            </label>
          );
        })}
      </form>

      <div className="equipment">
        {equipmentSlots.map(([slot, item]) => {
          const has2hWeaponEquipped =
            equipment.hand1 && equipment.hand1.type.hands === 2;
          const show2hFader = slot === "hand2" && !item && has2hWeaponEquipped;
          const itemTier = item ? item.tier : 0;
          return (
            <EquippedItem
              key={slot}
              $tier={
                show2hFader && equipment.hand1 ? equipment.hand1.tier : itemTier
              }
              $rarity={
                show2hFader ? equipment.hand1?.rarity.value : item?.rarity.value
              }
            >
              <img
                className="item-slot"
                src={getItemSlotImagePath(slot)}
                alt={slot}
                title={slot}
              />
              {show2hFader ? (
                <span className="offhand-2h">
                  {equipment.hand1?.name}
                  {equipment.hand1 && equipment.hand1.tier > 0 && (
                    <span className="tier-label">*</span>
                  )}
                </span>
              ) : (
                <span>
                  {item?.name ?? "Empty"}
                  {item && item.tier > 0 && (
                    <span className="tier-label">*</span>
                  )}
                </span>
              )}
              <button onClick={() => unequipItem(slot)}>X</button>
            </EquippedItem>
          );
        })}
      </div>

      <div className="bonuses">
        Bonuses:
        <div className="stat-bonuses">
          {equipmentBonuses.stats.map((stat) => (
            <div key={`${stat.label}-bonus`}>
              +{stat.max} {stat.label}
            </div>
          ))}
        </div>
        <div className="attributes">
          {equipmentBonuses.attributes.map((bonus, index) => (
            <div key={`attribute-bonus-${index}`}>{bonus}</div>
          ))}
        </div>
      </div>

      <div className="fortunes">
        Fortunes:
        <div className="equipped-fortunes">
          {[...fortunes, ...Array(Math.max(0, 4 - fortunes.length)).fill(null)]
            .slice(0, 4)
            .map((fortune, index) =>
              fortune ? (
                <div
                  key={fortune.GUID}
                  className="fortune-tile"
                  onClick={() => unequipFortune(fortune)}
                >
                  <img
                    src={getFortuneImagePath(fortune.name)}
                    alt={fortune.name}
                    title={fortune.name}
                  />
                </div>
              ) : (
                <div
                  key={`empty-fortune-${index + 1}`}
                  className="fortune-tile"
                >
                  Empty
                </div>
              )
            )}
        </div>
      </div>
    </CharacterContainer>
  );
};

import { type ChangeEvent } from "react";
import { styled } from "styled-components";

import {
  type EquipmentSlot,
  useCharacterContext,
} from "../context/CharacterContext";

import type { StatImprovement, ValueRange } from "../types/common";
import type { EquippedArmor, EquippedWeapon } from "../types/item";

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
  justify-content: space-between;
  align-items: center;
  color: ${({ theme, $rarity }) =>
    $rarity ? theme.colors.rarity[$rarity] : "#777"};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.borderHover};
  }

  .tier-label {
    color: ${({ theme, $tier }) => theme.colors.tier[$tier]};
  }

  .offhand-2h {
    opacity: 50%;
  }

  button {
    border-radius: 0;
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

  function getEquipmentBonuses(): {
    stats: StatImprovement[];
    attributes: string[];
  } {
    let stats: StatImprovement[] = [];
    let attributes: string[] = [];

    Object.values(equipment).forEach((item) => {
      if (item?.baseStats) stats = [...stats, ...item.baseStats];
      if (item?.attributes) attributes = [...attributes, ...item.attributes];
    });

    const mergedStats: Record<string, ValueRange> = {};

    stats.forEach(({ label, min, max }) => {
      if (!mergedStats[label]) {
        mergedStats[label] = { min, max };
      } else {
        mergedStats[label].min += min;
        mergedStats[label].max += max;
      }
    });

    // Convert mergedStats back to an array
    const statsArray: StatImprovement[] = Object.entries(mergedStats).map(
      ([label, range]) => ({
        label,
        ...range,
      })
    );

    return {
      stats: statsArray,
      attributes,
    };
  }

  const statNames = Object.keys(stats) as (keyof typeof stats)[];
  const equipmentSlots = Object.entries(equipment) as [
    EquipmentSlot,
    EquippedWeapon | EquippedArmor | null
  ][];

  const equipmentBonuses = getEquipmentBonuses();

  return (
    <CharacterContainer>
      <form className="stats">
        {statNames.map((stat) => {
          const label = stat.charAt(0).toUpperCase() + stat.slice(1);
          const value = stats[stat];
          const bonus =
            equipmentBonuses?.stats.find((s) => s.label === label)?.max ?? 0;
          return (
            <label key={stat}>
              <span>{label}</span>
              <div className="values">
                <input
                  name={stat}
                  type="number"
                  value={value}
                  onChange={handleUpdateStat}
                  min={8}
                />

                <span>{value + bonus}</span>
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
            .map((fortune) =>
              fortune ? (
                <div className="fortune-tile">
                  <img
                    key={fortune.GUID}
                    src={`/images${fortune.image}`}
                    alt={fortune.name}
                    title={fortune.name}
                    onClick={() => unequipFortune(fortune)}
                  />
                </div>
              ) : (
                <div className="fortune-tile">Empty</div>
              )
            )}
        </div>
      </div>
    </CharacterContainer>
  );
};

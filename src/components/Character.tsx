import { ChangeEvent } from "react";
import { styled } from "styled-components";

import {
  EquipmentSlot,
  useCharacterContext,
} from "../context/CharacterContext";
import { type Armor, type Weapon } from "../types/item";
import { type StatImprovement, type ValueRange } from "../types/common";

const CharacterContainer = styled.div`
  min-width: 280px;

  .stats,
  .equipment,
  .bonuses {
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
`;

const EquippedItem = styled.div<{ $rarity?: number }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme, $rarity }) =>
    $rarity ? theme.colors.rarity[$rarity] : "#777"};
  border: 1px solid #211a19;

  .offhand-2h {
    opacity: 50%;
  }

  &:hover {
    outline: 1px solid #302725;
  }

  button {
    border-radius: 0;
  }
`;

export const Character = () => {
  const { stats, equipment, unequipItem, updateStat } = useCharacterContext();

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
    Weapon | Armor | null
  ][];

  const equipmentBonuses = getEquipmentBonuses();

  const has2hWeaponEquipped =
    equipment.hand1 && equipment.hand1.type.hands === 2;

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
          const show2hFader = slot === "hand2" && !item && has2hWeaponEquipped;
          return (
            <EquippedItem
              $rarity={
                show2hFader ? equipment.hand1?.rarity.value : item?.rarity.value
              }
            >
              {show2hFader ? (
                <span className="offhand-2h">{equipment.hand1?.name}</span>
              ) : (
                <span>{item?.name ?? "Empty"}</span>
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
    </CharacterContainer>
  );
};

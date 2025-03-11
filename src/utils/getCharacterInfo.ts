import { type Stats, type Equipment } from "../context/CharacterContext";
import type {
  KeyValuePair,
  StatImprovement,
  ValueRange,
} from "../types/common";

export function getTotalStatValues(
  stats: Stats,
  equipment: Equipment
): KeyValuePair[] {
  const statNames = Object.keys(stats) as (keyof typeof stats)[];
  const equipmentBonuses = getEquipmentBonuses(equipment);

  return statNames.map((s) => {
    const label = s.charAt(0).toUpperCase() + s.slice(1);
    const value = stats[s];
    const bonus =
      equipmentBonuses?.stats.find((sb) => sb.label === label)?.max ?? 0;
    return { label, value: value + bonus };
  });
}

// function getMaxResource(base: number, stat: number, level: number = 30) {
// const flatBonus = stat * 5;
// const percentageBonus = base + flatBonus * (stat * 0.01);
// const levelBonus = level - 1 < 0 ? 0 : (level - 1) * 20;
// console.log(base, flatBonus, percentageBonus, levelBonus);
// return base + flatBonus + percentageBonus;
// }

// function getBaseResource(level: number, flatBase: number): number {
// const percBaseHealthPerLevel = 50;
// return Math.ceil(
// flatBase + (level - 1) * (flatBase * (percBaseHealthPerLevel / 100))
// );
// }

// export function getHealth(vitality: number, level: number = 1): number {
// const healthBase = 30;
// return getMaxResource(getBaseResource(level, healthBase), vitality, level);

// this seems "correct" but it's not really
// const flat = 100 + (vitality - 8) * 6;
// const perc = 0.01 * (vitality - 8);
// const max = Math.ceil(flat + perc);
// return max;
// }

// export function getMana(intelligence: number, level: number = 30): number {
// const manaBase = 15;
// return getMaxResource(getBaseResource(level, manaBase), intelligence, level);
// }

export function getEquipmentBonuses(equipment: Equipment): {
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

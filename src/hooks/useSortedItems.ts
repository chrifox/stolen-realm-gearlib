import { useMemo } from "react";

import type { SortOrder } from "../context/FilterSortContext";

import type { StatImprovement } from "../types/common";
import type { Armor, SortableItem, Weapon } from "../types/item";

const sortItems = (
  items: SortableItem[],
  field: string,
  order: SortOrder,
  statSort?: string
) => {
  return items.sort((a, b) => {
    let valueA: string | number, valueB: string | number;

    switch (field) {
      case "name":
        valueA = a.name;
        valueB = b.name;
        break;
      case "rarity":
        valueA = a.rarity.value;
        valueB = b.rarity.value;
        break;
      case "attackPower":
        valueA = (a as Weapon).attackPower?.max ?? 0;
        valueB = (b as Weapon).attackPower?.max ?? 0;
        break;
      case "armor":
        valueA = (a as Armor).armor?.max;
        valueB = (b as Armor).armor?.max;
        break;
      case "magicArmor":
        valueA = (a as Armor).magicArmor?.max;
        valueB = (b as Armor).magicArmor?.max;
        break;
      case "stat": {
        valueA =
          a.baseStats.find((stat: StatImprovement) => stat.label === statSort)
            ?.max || 0;
        valueB =
          b.baseStats.find((stat: StatImprovement) => stat.label === statSort)
            ?.max || 0;
        break;
      }
      default:
        throw new Error(`Invalid field: ${field}`);
    }

    // Compare values and return based on the order (ascending or descending)
    if (order === "asc") {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    } else {
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    }
  });
};

export function useSortedItems(
  items: SortableItem[],
  sortField: string,
  sortOrder: SortOrder,
  statSort: string
) {
  const sortedItems = useMemo(() => {
    return sortItems(items, sortField, sortOrder, statSort);
  }, [items, sortField, sortOrder, statSort]);

  return {
    sortedItems,
  };
}

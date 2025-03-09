import { useMemo } from "react";

import { Armor, Weapon } from "../types/item";
import { StatImprovement } from "../types/common";
import { SortOrder } from "../context/SortContext";

const sortItems = (
  items: any[],
  searchTerm: string,
  field: string,
  order: SortOrder,
  attribute?: string
) => {
  return items
    .filter(
      (item) =>
        !searchTerm ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.attributes
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let valueA: any, valueB: any;

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
          valueA = a.attackPower?.max;
          valueB = b.attackPower?.max;
          break;
        case "armor":
          valueA = a.armor?.max;
          valueB = b.armor?.max;
          break;
        case "magicArmor":
          valueA = a.magicArmor?.max;
          valueB = b.magicArmor?.max;
          break;
        case "stat": {
          valueA =
            a.baseStats.find(
              (stat: StatImprovement) => stat.label === attribute
            )?.max || 0;
          valueB =
            b.baseStats.find(
              (stat: StatImprovement) => stat.label === attribute
            )?.max || 0;
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
  items: Armor[] | Weapon[],
  searchTerm: string,
  sortField: string,
  sortOrder: SortOrder,
  statFilter: string
) {
  const sortedItems = useMemo(() => {
    return sortItems(items, searchTerm, sortField, sortOrder, statFilter);
  }, [items, searchTerm, sortField, sortOrder, statFilter]);

  return {
    sortedItems,
  };
}

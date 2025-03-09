import { useMemo } from "react";

import { type StatImprovement } from "../types/common";
import { type Armor, type Weapon } from "../types/item";

const filterItems = (
  items: any[],
  searchTerm: string,
  rarityFilter: number[],
  statFilter: string[]
) => {
  return items.filter((item) => {
    const matchesSearchTerm =
      !searchTerm ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.attributes.join("").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRarityFilter =
      rarityFilter.length === 0 || rarityFilter.includes(item.rarity.value);

    const matchesStatFilter =
      statFilter.length === 0 ||
      statFilter.every((filterStat) =>
        item.baseStats.some(
          (stat: StatImprovement) => stat.label === filterStat
        )
      );

    return matchesSearchTerm && matchesRarityFilter && matchesStatFilter;
  });
};

export function useFilteredItems(
  items: Armor[] | Weapon[],
  searchTerm: string,
  rarityFilter: number[],
  statFilter: string[]
) {
  const filteredItems = useMemo(() => {
    return filterItems(items, searchTerm, rarityFilter, statFilter);
  }, [items, searchTerm, rarityFilter, statFilter]);

  return {
    filteredItems,
  };
}

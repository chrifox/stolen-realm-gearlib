import { useMemo } from "react";

import type { DamageType, Stat, StatImprovement } from "../types/common";
import type { Armor, Weapon } from "../types/item";

const filterItems = (
  items: Weapon[] | Armor[],
  searchTerm: string,
  rarityFilter: number[],
  statFilter: Stat[],
  damageTypeFilter: DamageType[],
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

    const matchesDamageTypeFilter =
      damageTypeFilter.length === 0 ||
      ("damageType" in item && damageTypeFilter.includes(item.damageType));

    return (
      matchesSearchTerm &&
      matchesRarityFilter &&
      matchesStatFilter &&
      matchesDamageTypeFilter
    );
  });
};

export function useFilteredItems(
  items: Armor[] | Weapon[],
  searchTerm: string,
  rarityFilter: number[],
  statFilter: Stat[],
  damageTypeFilter: DamageType[]
) {
  const filteredItems = useMemo(() => {
    return filterItems(
      items,
      searchTerm,
      rarityFilter,
      statFilter,
      damageTypeFilter
    );
  }, [items, searchTerm, rarityFilter, statFilter, damageTypeFilter]);

  return {
    filteredItems,
  };
}

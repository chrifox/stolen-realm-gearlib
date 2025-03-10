import { useEffect } from "react";
import { styled } from "styled-components";

import {
  type ItemType,
  useFilterSortContext,
} from "../context/FilterSortContext";

import { useFilteredItems } from "../hooks/useFilteredItems";
import { useSortedItems } from "../hooks/useSortedItems";

import type { Armor, Weapon } from "../types/item";
import { FilterSortControls } from "./FilterSortControls";
import { ItemTile } from "./ItemTile";

type ItemListProps = {
  data: Weapon[] | Armor[];
  itemType: ItemType;
};

const ItemTileList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 4px;
  width: 100%;
`;

export const ItemList = ({ data, itemType }: ItemListProps) => {
  const {
    searchTerm,
    sortField,
    sortOrder,
    statSort,
    showDetails,
    setCurrentItemType,
    tier,
    rarityFilter,
    statFilter,
    damageTypeFilter,
  } = useFilterSortContext();

  const { filteredItems } = useFilteredItems(
    data,
    searchTerm,
    rarityFilter,
    statFilter,
    damageTypeFilter
  );
  const { sortedItems } = useSortedItems(
    filteredItems,
    sortField,
    sortOrder,
    statSort
  );

  useEffect(() => {
    setCurrentItemType(itemType);
  }, [setCurrentItemType, itemType]);

  return (
    <ItemTileList>
      <FilterSortControls itemType={itemType} />
      {sortedItems.map((item) => (
        <ItemTile
          key={item.name}
          item={item}
          itemType={itemType}
          showDetails={showDetails}
          tier={tier}
        />
      ))}
    </ItemTileList>
  );
};

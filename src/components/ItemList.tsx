import { useEffect } from "react";
import { styled } from "styled-components";

import { ItemType, useSortContext } from "../context/SortContext";

import { useSortedItems } from "../hooks/useSortedItems";

import { SortControls } from "./SortControls";
import { Armor, Weapon } from "../types/item";
import { ItemTile } from "./ItemTile";

type ItemListProps = {
  data: Weapon[] | Armor[];
  itemType: ItemType;
};

const ItemTileList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
`;

export const ItemList = ({ data, itemType }: ItemListProps) => {
  const {
    searchTerm,
    sortField,
    sortOrder,
    statFilter,
    showDetails,
    setCurrentItemType,
  } = useSortContext();

  const { sortedItems } = useSortedItems(
    data,
    searchTerm,
    sortField,
    sortOrder,
    statFilter
  );

  useEffect(() => {
    setCurrentItemType(itemType);
  }, [setCurrentItemType, itemType]);

  return (
    <ItemTileList>
      <SortControls itemType={itemType} />
      {sortedItems.map((item) => (
        <ItemTile
          key={item.name}
          item={item}
          itemType={itemType}
          showDetails={showDetails}
        />
      ))}
    </ItemTileList>
  );
};

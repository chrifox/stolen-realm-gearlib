import { useEffect } from "react";

import { Weapon } from "../types/item";
import { useSortContext } from "../context/SortContext";
import { useSortedItems } from "../hooks/useSortedItems";
import { ItemTileContainer, ItemTileList } from "./ItemTile";
import { SortControls } from "./SortControls";
import { useCharacterContext } from "../context/CharacterContext";

export const WeaponList = ({ data }: { data: Weapon[] }) => {
  const { sortField, sortOrder, statFilter, showDetails, setCurrentItemType } =
    useSortContext();
  const { sortedItems } = useSortedItems(
    data,
    sortField,
    sortOrder,
    statFilter
  );

  useEffect(() => {
    setCurrentItemType("Weapon");
  }, [setCurrentItemType]);

  return (
    <ItemTileList>
      <SortControls itemType="Weapon" />
      {sortedItems.map((item) => (
        <WeaponTile item={item} showDetails={showDetails} />
      ))}
    </ItemTileList>
  );
};

const WeaponTile = ({
  item,
  showDetails,
}: {
  item: Weapon;
  showDetails: boolean;
}) => {
  const { equipItem } = useCharacterContext();

  const handleEquipItem = () => {
    equipItem(item);
  };

  const {
    name,
    rarity,
    type,
    attackPower,
    damageType,
    baseStats,
    attributes,
    droppedBy,
    location,
  } = item;

  return (
    <ItemTileContainer
      $rarity={rarity.value}
      $damageType={damageType}
      onClick={handleEquipItem}
    >
      <div className="name">{name.toUpperCase()}</div>
      <div className="rarity-type">
        {rarity.label} {type.label} ({type.hands}H)
      </div>
      <div className="attackPower">
        {attackPower.min < 0
          ? attackPower.max
          : `${attackPower.min} - ${attackPower.max}`}
      </div>
      <div className="damageType">{damageType} Damage</div>
      <div className="baseStats">
        {baseStats.map((stat) => (
          <div className="stats" key={stat.label}>
            <span>+{stat.max}&nbsp;</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="attributes">
        {attributes.map((attribute, index) => (
          <div key={index}>{attribute}</div>
        ))}
      </div>
      {showDetails && (
        <>
          <div className="droppedBy">
            Dropped by:
            {droppedBy.map((mobName, index) => (
              <div key={index}>{mobName}</div>
            ))}
          </div>
          <div className="location">
            Location:
            {location.map((zone, index) => (
              <div key={index}>{zone}</div>
            ))}
          </div>
        </>
      )}
    </ItemTileContainer>
  );
};

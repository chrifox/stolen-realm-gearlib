import { useState } from "react";

import { type Armor } from "../types/item";
import { useSortedItems } from "../hooks/useSortedItems";
import { ItemTileContainer, ItemTileList } from "./ItemTile";
import { SortControls } from "./SortControls";
import { useCharacterContext } from "../context/CharacterContext";

export const ArmorList = ({ data }: { data: Armor[] }) => {
  const { sortedItems, ...controls } = useSortedItems(data);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <ItemTileList>
      <SortControls
        itemType="Armor"
        {...controls}
        setShowDetails={() => setShowDetails((wasShowing) => !wasShowing)}
        showDetails={showDetails}
        setSortOrder={() =>
          controls.setSortOrder((order) => (order === "asc" ? "desc" : "asc"))
        }
      />
      {sortedItems.map((item) => (
        <ArmorTile item={item} showDetails={showDetails} />
      ))}
    </ItemTileList>
  );
};

const ArmorTile = ({
  item,
  showDetails,
}: {
  item: Armor;
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
    armor,
    magicArmor,
    baseStats,
    attributes,
    droppedBy,
    location,
  } = item;

  return (
    <ItemTileContainer $rarity={rarity.value} onClick={handleEquipItem}>
      <div className="name">{name.toUpperCase()}</div>
      <div className="rarity-type">
        {rarity.label} {type}
      </div>
      <div className="armor-magicArmor">
        <div className="values">
          <span className="armor">{armor.max}</span>
          <span>/</span>
          <span className="magicArmor">{magicArmor.max}</span>
        </div>
        <div className="labels">
          <span>Armor</span>
          <span>/</span>
          <span className="magicArmor">Magic Armor</span>
        </div>
      </div>
      <div className="baseStats">
        {baseStats.map((stat) => (
          <div className="stats">
            <span>+{stat.max}&nbsp;</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="attributes">
        {attributes.map((attribute) => (
          <div>{attribute}</div>
        ))}
      </div>
      {showDetails && (
        <>
          <div className="droppedBy">
            Dropped by:
            {droppedBy.map((mobName) => (
              <div>{mobName}</div>
            ))}
          </div>
          <div className="location">
            Location:
            {location.map((zone) => (
              <div>{zone}</div>
            ))}
          </div>
        </>
      )}
    </ItemTileContainer>
  );
};

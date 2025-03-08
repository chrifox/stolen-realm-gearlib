import { useState } from "react";

import { type Armor } from "../types/item";
import { useSortedItems } from "../hooks/useSortedItems";
import { ItemTileContainer, ItemTileList } from "./ItemTile";
import { SortControls } from "./SortControls";

type ArmorType = "Shield" | "Head" | "Chest" | "Amulet" | "Ring";

export const ArmorList = ({
  data,
  type,
}: {
  data: Armor[];
  type: ArmorType;
}) => {
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
        <ArmorTile {...item} showDetails={showDetails} type={type} />
      ))}
    </ItemTileList>
  );
};

const ArmorTile = ({
  name,
  rarity,
  armor,
  magicArmor,
  baseStats,
  attributes,
  droppedBy,
  location,
  showDetails,
  type,
}: Armor & { showDetails: boolean; type: ArmorType }) => (
  <ItemTileContainer $rarity={rarity.value}>
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

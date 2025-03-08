import { useState } from "react";

import { type Armor } from "../types/item";
import { ItemTileContainer, ItemTileList } from "./ItemTile";

export const HeadList = ({ data }: { data: Armor[] }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <ItemTileList>
      {data.map((head) => (
        <HeadTile showDetails={showDetails} {...head} />
      ))}
    </ItemTileList>
  );
};

const HeadTile = ({
  name,
  rarity,
  armor,
  magicArmor,
  baseStats,
  attributes,
  droppedBy,
  location,
  showDetails,
}: Armor & { showDetails: boolean }) => (
  <ItemTileContainer $rarity={rarity.value}>
    <div className="name">{name.toUpperCase()}</div>
    <div className="rarity-type">{rarity.label} Shield</div>
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

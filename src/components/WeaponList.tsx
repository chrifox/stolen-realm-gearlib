import { useState } from "react";

import { type Weapon } from "../types/item";
import { useSortedItems } from "../hooks/useSortedItems";
import { ItemTileContainer, ItemTileList } from "./ItemTile";
import { SortControls } from "./SortControls";

export const WeaponList = ({ data }: { data: Weapon[] }) => {
  const { sortedItems: sortedWeapons, ...controls } = useSortedItems(data);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <ItemTileList>
      <SortControls
        itemType="Weapon"
        {...controls}
        setShowDetails={() => setShowDetails((wasShowing) => !wasShowing)}
        showDetails={showDetails}
        setSortOrder={() =>
          controls.setSortOrder((order) => (order === "asc" ? "desc" : "asc"))
        }
      />
      {sortedWeapons.map((weapon) => (
        <WeaponTile showDetails={showDetails} {...weapon} />
      ))}
    </ItemTileList>
  );
};

const WeaponTile = ({
  name,
  rarity,
  type,
  attackPower,
  damageType,
  baseStats,
  attributes,
  droppedBy,
  location,
  showDetails,
}: Weapon & { showDetails: boolean }) => (
  <ItemTileContainer $rarity={rarity.value} $damageType={damageType}>
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

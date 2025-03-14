import { styled } from "styled-components";

import { useCharacterContext } from "../context/CharacterContext";
import { type ItemType } from "../context/FilterSortContext";

import type { ItemTier, Armor, Weapon } from "../types/item";
import { Tile } from "./styled/Tile";
import { canBeTiered } from "../utils/canBeTiered";

type ItemTileProps = {
  item: Weapon | Armor;
  itemType: ItemType;
  showDetails: boolean;
  tier: ItemTier;
};

const ItemTileContainer = styled(Tile)<{
  $rarity: number;
  $tier: number;
  $damageType?: string;
}>`
  .name {
    color: ${({ theme, $rarity }) => theme.colors.rarity[$rarity]};

    .tier-label {
      color: ${({ theme, $tier }) => theme.colors.tier[$tier]};
    }
  }

  .rarity-type {
    color: #777;
  }

  .armor-magicArmor {
    .values {
      font-size: 20px;

      .magicArmor {
        color: skyblue;
      }
    }

    .labels {
      font-size: 14px;
      .magicArmor {
        color: skyblue;
      }
    }
  }

  .attackPower {
    font-size: 32px;
  }

  .attackPower,
  .damageType {
    color: ${({ theme, $damageType }) =>
      theme.colors.damageType[$damageType ? $damageType.toLowerCase() : ""]};
  }

  .stats {
    color: ${({ theme }) => theme.colors.stats};
  }

  .guid {
    color: #777;
    font-size: 12px;
    margin-top: auto;
  }
`;

export const ItemTile = ({
  item,
  itemType,
  showDetails,
  tier,
}: ItemTileProps) => {
  const { equipItem } = useCharacterContext();

  const handleEquipItem = () => {
    equipItem({ ...item, tier });
  };

  function keyGen(label: string, index: number): string {
    return `${item.guid}-${label}-${index}`;
  }

  return (
    <ItemTileContainer
      $rarity={item.rarity.value}
      $damageType={"damageType" in item ? item?.damageType : undefined}
      $tier={tier}
      onClick={handleEquipItem}
    >
      <div className="name">
        {item.name.toUpperCase()}
        {canBeTiered(item.rarity.value) && tier > 0 && (
          <span className="tier-label">*</span>
        )}
      </div>
      <em className="rarity-type">
        {item.rarity.label}{" "}
        {typeof item.type === "object" ? item.type.label : item.type}
        {itemType === "Weapon" &&
          typeof item.type === "object" &&
          "hands" in item.type &&
          ` (${item.type.hands}H)`}
      </em>
      {itemType === "Weapon" ? (
        "attackPower" in item ? (
          <>
            <div className="attackPower">
              {item.attackPower.min < 0
                ? item.attackPower.max
                : `${item.attackPower.min} - ${item.attackPower.max}`}
            </div>
            <div className="damageType">{item.damageType} Damage</div>
          </>
        ) : null
      ) : "armor" in item && "magicArmor" in item ? (
        <div className="armor-magicArmor">
          <div className="values">
            <span className="armor">{item.armor.max}</span>
            <span>/</span>
            <span className="magicArmor">{item.magicArmor.max}</span>
          </div>
          <div className="labels">
            <span>Armor</span>
            <span>/</span>
            <span className="magicArmor">Magic Armor</span>
          </div>
        </div>
      ) : null}
      <div className="baseStats">
        {item.baseStats.map((stat, index) => (
          <div key={keyGen("baseStats", index)} className="stats">
            <span>+{stat.max}&nbsp;</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="attributes">
        {item.attributes.map((attribute, index) => (
          <div key={keyGen("attribute", index)}>{attribute}</div>
        ))}
      </div>
      {showDetails && (
        <>
          <div className="droppedBy">
            Dropped by:
            {item.droppedBy.map((mobName, index) => (
              <div key={keyGen("droppedBy", index)}>{mobName}</div>
            ))}
          </div>
          <div className="location">
            Location:
            {item.location.map((zone, index) => (
              <div key={keyGen("location", index)}>{zone}</div>
            ))}
          </div>
          <div className="guid">{item.guid}</div>
        </>
      )}
    </ItemTileContainer>
  );
};

import { styled } from "styled-components";

import { useCharacterContext } from "../context/CharacterContext";
import { ItemType } from "../context/SortContext";

import { Armor, Weapon } from "../types/item";

type ItemTileProps = {
  item: Weapon | Armor;
  itemType: ItemType;
  showDetails: boolean;
};

const ItemTileContainer = styled.div<{
  $rarity: number;
  $damageType?: string;
}>`
  display: flex;
  flex-flow: column nowrap;
  width: 240px;
  padding: 4px;
  border: 1px solid #211a19;

  &:hover {
    outline: 1px solid #302725;
  }

  .name {
    color: ${({ theme, $rarity }) => theme.colors.rarity[$rarity]};
    font-size: 18px;
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
    font-size: 28px;
  }

  .attackPower,
  .damageType {
    color: ${({ theme, $damageType }) =>
      theme.colors.damageType[$damageType ? $damageType.toLowerCase() : ""]};
  }

  .stats {
    color: ${({ theme }) => theme.colors.stats};
  }
`;

export const ItemTile = ({ item, itemType, showDetails }: ItemTileProps) => {
  const { equipItem } = useCharacterContext();

  const handleEquipItem = () => {
    equipItem(item);
  };

  return (
    <ItemTileContainer
      $rarity={item.rarity.value}
      $damageType={"damageType" in item ? item?.damageType : undefined}
      onClick={handleEquipItem}
    >
      <div className="name">{item.name.toUpperCase()}</div>
      <div className="rarity-type">
        {item.rarity.label}{" "}
        {typeof item.type === "object" ? item.type.label : item.type}
        {itemType === "Weapon" &&
          typeof item.type === "object" &&
          "hands" in item.type &&
          ` (${item.type.hands}H)`}
      </div>
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
        {item.baseStats.map((stat) => (
          <div className="stats" key={stat.label}>
            <span>+{stat.max}&nbsp;</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="attributes">
        {item.attributes.map((attribute, index) => (
          <div key={index}>{attribute}</div>
        ))}
      </div>
      {showDetails && (
        <>
          <div className="droppedBy">
            Dropped by:
            {item.droppedBy.map((mobName, index) => (
              <div key={index}>{mobName}</div>
            ))}
          </div>
          <div className="location">
            Location:
            {item.location.map((zone, index) => (
              <div key={index}>{zone}</div>
            ))}
          </div>
        </>
      )}
    </ItemTileContainer>
  );
};

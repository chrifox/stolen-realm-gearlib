import { styled } from "styled-components";

export const ItemTileList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 4px;
  width: 100%;

  .sort-controls {
    width: 100%;
  }
`;

export const ItemTileContainer = styled.div<{
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

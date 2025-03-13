import { styled } from "styled-components";

export const Tile = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  width: 240px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  user-select: none;

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.borderHover};
  }

  .name {
    font-family: ${({ theme }) => theme.fonts.title};
  }
`;

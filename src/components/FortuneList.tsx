import { type ChangeEvent, useState } from "react";
import { styled } from "styled-components";

import { useCsvData } from "../hooks/useCsvData";
import { useCharacterContext } from "../context/CharacterContext";
import { FullWidthSearch } from "./Search";
import { getFortuneImagePath } from "../utils/getImagePath";
import { Tile } from "./styled/Tile";

const FortuneListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 4px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    justify-content: flex-start;
  }
`;

const FortuneTile = styled(Tile)`
  padding-top: 8px;

  .name {
    color: ${({ theme }) => theme.colors.text.title};
    text-align: center;
  }

  img {
    width: 112px;
    height: 128px;
    margin: 4px auto;
  }

  .guid {
    color: #777;
    font-size: 12px;
    margin-top: auto;
  }
`;

export function FortuneList() {
  const { fortuneData } = useCsvData();
  const { equipFortune } = useCharacterContext();

  const [fortuneSearchTerm, setFortuneSearchTerm] = useState("");

  return (
    <FortuneListContainer>
      <FullWidthSearch
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFortuneSearchTerm(e.target.value)
        }
        value={fortuneSearchTerm}
      />
      {fortuneData
        .filter(
          (f) =>
            f.name.toLowerCase().includes(fortuneSearchTerm.toLowerCase()) ||
            f.description
              .toLowerCase()
              .includes(fortuneSearchTerm.toLowerCase()) ||
            f.source.toLowerCase().includes(fortuneSearchTerm.toLowerCase())
        )
        .sort((a, b) =>
          a.rarity.value > b.rarity.value
            ? -1
            : a.rarity.value < b.rarity.value
            ? 1
            : 0
        )
        .map((fortune) => (
          <FortuneTile key={fortune.GUID} onClick={() => equipFortune(fortune)}>
            <div className="name">{fortune.name}</div>
            <img
              src={getFortuneImagePath(fortune.name)}
              alt={fortune.name}
              title={fortune.name}
            />
            <div className="description">{fortune.description}</div>
            <div className="source">Event: {fortune.source}</div>
            <div className="location">Locations: {fortune.location}</div>
            <div className="guid">{fortune.GUID}</div>
          </FortuneTile>
        ))}
    </FortuneListContainer>
  );
}

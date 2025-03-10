import { type ChangeEvent, useState } from "react";
import { css, styled } from "styled-components";

import { useCsvData } from "../hooks/useCsvData";
import { useCharacterContext } from "../context/CharacterContext";
import { FullWidthSearch } from "./Search";

const FortuneListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 4px;
  width: 100%;
`;

const commonFortuneTileCss = css`
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  padding: 4px;
  width: 240px;
`;

const FortuneTile = styled.div`
  ${commonFortuneTileCss}

  .name {
    font-size: 18px;
  }

  img {
    width: 112px;
    height: 128px;
  }

  .guid {
    color: #777;
    font-size: 12px;
    margin-top: auto;
  }
`;

const EmptyFortuneTile = styled.div`
  ${commonFortuneTileCss}
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
            f.source.toLowerCase().includes(fortuneSearchTerm.toLowerCase())
        )
        .sort((a, b) =>
          a.rarity.value > b.rarity.value
            ? -1
            : a.rarity.value < b.rarity.value
            ? 1
            : 0
        )
        .map((fortune) =>
          fortune ? (
            <FortuneTile
              key={fortune.GUID}
              onClick={() => equipFortune(fortune)}
            >
              <div className="name">{fortune.name}</div>
              <img
                src={`/images${fortune.image}`}
                alt={fortune.name}
                title={fortune.name}
              />
              <div>Source: {fortune.source}</div>
              <div className="guid">{fortune.GUID}</div>
            </FortuneTile>
          ) : (
            <EmptyFortuneTile />
          )
        )}
    </FortuneListContainer>
  );
}

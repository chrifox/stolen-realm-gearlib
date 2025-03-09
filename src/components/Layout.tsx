import { styled } from "styled-components";

import { CharacterContextProvider } from "../context/CharacterContext";
import { SortContextProvider } from "../context/SortContext";

import { useCsvData } from "../hooks/useCsvData";

import { Character } from "./Character";
import { Tabs } from "./Tabs";
import { ItemList } from "./ItemList";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export function Layout() {
  const { weaponData, shieldData, headData, chestData, amuletData, ringData } =
    useCsvData();

  return (
    <CharacterContextProvider>
      <SortContextProvider>
        <LayoutContainer>
          <Character />
          <Tabs
            tabs={[
              "Weapons",
              "Shields",
              "Heads",
              "Chestplates",
              "Rings",
              "Amulets",
            ]}
          >
            <Tabs.Tab>
              {weaponData && <ItemList itemType="Weapon" data={weaponData} />}
            </Tabs.Tab>
            <Tabs.Tab>
              {shieldData && <ItemList itemType="Armor" data={shieldData} />}
            </Tabs.Tab>
            <Tabs.Tab>
              {headData && <ItemList itemType="Armor" data={headData} />}
            </Tabs.Tab>
            <Tabs.Tab>
              {chestData && <ItemList itemType="Armor" data={chestData} />}
            </Tabs.Tab>
            <Tabs.Tab>
              {ringData && <ItemList itemType="Armor" data={ringData} />}
            </Tabs.Tab>
            <Tabs.Tab>
              {amuletData && <ItemList itemType="Armor" data={amuletData} />}
            </Tabs.Tab>
          </Tabs>
        </LayoutContainer>
      </SortContextProvider>
    </CharacterContextProvider>
  );
}

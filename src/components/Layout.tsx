import { styled } from "styled-components";

import { CharacterContextProvider } from "../context/CharacterContext";
import { SortContextProvider } from "../context/SortContext";

import { useCsvData } from "../hooks/useCsvData";

import { Character } from "./Character";
import { Tabs } from "./Tabs";
import { WeaponList } from "./WeaponList";
import { ArmorList } from "./ArmorList";

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
              {weaponData && <WeaponList data={weaponData} />}
            </Tabs.Tab>
            <Tabs.Tab>{shieldData && <ArmorList data={shieldData} />}</Tabs.Tab>
            <Tabs.Tab>{headData && <ArmorList data={headData} />}</Tabs.Tab>
            <Tabs.Tab>{chestData && <ArmorList data={chestData} />}</Tabs.Tab>
            <Tabs.Tab>{ringData && <ArmorList data={ringData} />}</Tabs.Tab>
            <Tabs.Tab>{amuletData && <ArmorList data={amuletData} />}</Tabs.Tab>
          </Tabs>
        </LayoutContainer>
      </SortContextProvider>
    </CharacterContextProvider>
  );
}

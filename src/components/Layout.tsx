import { styled } from "styled-components";

import { useFilterSortContext } from "../context/FilterSortContext";
import { useCsvData } from "../hooks/useCsvData";

import { Character } from "./Character";
import { Tabs } from "./Tabs";
import { ItemList } from "./ItemList";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export function Layout() {
  const { tier } = useFilterSortContext();
  const { weaponData, armorData } = useCsvData(tier);

  return (
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
          {armorData["Shield"] && (
            <ItemList itemType="Armor" data={armorData["Shield"]} />
          )}
        </Tabs.Tab>
        <Tabs.Tab>
          {armorData["Head"] && (
            <ItemList itemType="Armor" data={armorData["Head"]} />
          )}
        </Tabs.Tab>
        <Tabs.Tab>
          {armorData["Chest"] && (
            <ItemList itemType="Armor" data={armorData["Chest"]} />
          )}
        </Tabs.Tab>
        <Tabs.Tab>
          {armorData["Ring"] && (
            <ItemList itemType="Armor" data={armorData["Ring"]} />
          )}
        </Tabs.Tab>
        <Tabs.Tab>
          {armorData["Amulet"] && (
            <ItemList itemType="Armor" data={armorData["Amulet"]} />
          )}
        </Tabs.Tab>
      </Tabs>
    </LayoutContainer>
  );
}

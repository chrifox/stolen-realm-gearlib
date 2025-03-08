import { useCsvData } from "./hooks/useCsvData";
import { WeaponList } from "./components/WeaponList";
import { ArmorList } from "./components/ArmorList";
import { Tabs } from "./components/Tabs";

export function DataLayer() {
  const { weaponData, shieldData, headData, chestData, amuletData, ringData } =
    useCsvData();

  return (
    <Tabs
      tabs={["Weapons", "Shields", "Heads", "Chestplates", "Amulets", "Rings"]}
    >
      <Tabs.Tab>{weaponData && <WeaponList data={weaponData} />}</Tabs.Tab>
      <Tabs.Tab>
        {shieldData && <ArmorList data={shieldData} type="Shield" />}
      </Tabs.Tab>
      <Tabs.Tab>
        {headData && <ArmorList data={headData} type="Head" />}
      </Tabs.Tab>
      <Tabs.Tab>
        {chestData && <ArmorList data={chestData} type="Chest" />}
      </Tabs.Tab>
      <Tabs.Tab>
        {amuletData && <ArmorList data={amuletData} type="Amulet" />}
      </Tabs.Tab>
      <Tabs.Tab>
        {ringData && <ArmorList data={ringData} type="Ring" />}
      </Tabs.Tab>
    </Tabs>
  );
}

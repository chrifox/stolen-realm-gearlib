import { useEffect, useState } from "react";

import weaponCSV from "../assets/data/weapon.csv?raw";
import shieldCSV from "../assets/data/shield.csv?raw";
import headCSV from "../assets/data/head.csv?raw";
import chestCSV from "../assets/data/chestplate.csv?raw";
import amuletCSV from "../assets/data/amulet.csv?raw";
import ringCSV from "../assets/data/ring.csv?raw";
import { parseCSV } from "../utils/parseCSV";
import { type StatImprovement, type ValueRange } from "../types/common";
import { csvItemBase, csvArmor, type csvWeapon } from "../types/csv";
import {
  type ItemBase,
  type Armor,
  type WeaponType,
  type Weapon,
  ArmorType,
} from "../types/item";

const removeWhitespace = (str: string) => str.replace(/\s+/g, "");
const removeCurlyBrackets = (str: string) => str.replace(/[{}]/g, "");

function splitField(str: string, delimiter: string) {
  return str
    .split(delimiter)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function getValueRange(csvRange: string): ValueRange {
  const parts = removeWhitespace(removeCurlyBrackets(csvRange)).split(",");

  if (parts.length === 1) {
    return { min: -1, max: parseInt(parts[0], 10) };
  }

  return { min: parseInt(parts[0], 10), max: parseInt(parts[1], 10) };
}

function convertBaseStats(str: string): StatImprovement[] {
  const regex = /(\w+)\s*{([\d,\s]+)}/g;

  const statImprovements: StatImprovement[] = [];
  let match;

  while ((match = regex.exec(str)) !== null) {
    const label = match[1];
    const valueRange = getValueRange(match[2]);

    statImprovements.push({ label, ...valueRange });
  }

  return statImprovements;
}

function mapWeaponType(type: string): WeaponType {
  const [label, hand] = type.split("_");

  const fixedHands: Record<string, 1 | 2> = {
    Bow: 2,
    Staff: 2,
    Polearm: 2,
    Wand: 1,
  };

  return {
    label,
    hands: fixedHands[label] ?? (hand === "2H" ? 2 : 1),
  } as WeaponType;
}

function processItemData<T extends csvItemBase>(item: T): ItemBase {
  const rarityParts = removeWhitespace(item.Rarity).split(":");
  const rarity = { label: rarityParts[1], value: parseInt(rarityParts[0]) };
  const baseStats = convertBaseStats(item["Base Stats"]);
  const attributes = splitField(item.Attributes ?? "", "- ");
  const droppedBy = splitField(item["Dropped By"], "- ");
  const location = splitField(
    (item.Locations ?? "").replaceAll("\n", ""),
    "- "
  );

  return {
    name: item.Name,
    rarity,
    baseStats,
    attributes,
    droppedBy,
    location,
  };
}

function processWeaponData(csvWeapons: csvWeapon[]): Weapon[] {
  return csvWeapons.map((weapon) => {
    const commonData = processItemData(weapon);
    return {
      ...commonData,
      attackPower: getValueRange(weapon["Attack Power"]),
      damageType: weapon["Damage Type"],
      type: mapWeaponType(weapon.Type),
    };
  });
}

function processArmorData(csvShields: csvArmor[], type: ArmorType): Armor[] {
  return csvShields.map((shield) => {
    const commonData = processItemData(shield);
    return {
      ...commonData,
      type,
      armor: shield.Armor ? getValueRange(shield.Armor) : { min: -1, max: 0 },
      magicArmor: shield["Magic Armor"]
        ? getValueRange(shield["Magic Armor"])
        : { min: -1, max: 0 },
    };
  });
}

export function useCsvData() {
  const [weaponData, setWeaponData] = useState<Weapon[] | null>();
  const [shieldData, setShieldData] = useState<Armor[] | null>();
  const [headData, setHeadData] = useState<Armor[] | null>();
  const [chestData, setChestData] = useState<Armor[] | null>();
  const [amuletData, setAmuletData] = useState<Armor[] | null>();
  const [ringData, setRingData] = useState<Armor[] | null>();

  useEffect(() => {
    setWeaponData(processWeaponData(parseCSV<csvWeapon>(weaponCSV)));
    setShieldData(processArmorData(parseCSV<csvArmor>(shieldCSV), "Shield"));
    setHeadData(processArmorData(parseCSV<csvArmor>(headCSV), "Head"));
    setChestData(processArmorData(parseCSV<csvArmor>(chestCSV), "Chest"));
    setAmuletData(processArmorData(parseCSV<csvArmor>(amuletCSV), "Amulet"));
    setRingData(processArmorData(parseCSV<csvArmor>(ringCSV), "Ring"));
  }, []);

  return {
    weaponData,
    shieldData,
    headData,
    chestData,
    amuletData,
    ringData,
  };
}

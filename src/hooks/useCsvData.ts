import { useEffect, useState } from "react";

import weaponCSV from "../assets/data/weapon.csv?raw";
import shieldCSV from "../assets/data/shield.csv?raw";
import headCSV from "../assets/data/head.csv?raw";
import chestCSV from "../assets/data/chestplate.csv?raw";
import amuletCSV from "../assets/data/amulet.csv?raw";
import ringCSV from "../assets/data/ring.csv?raw";
import itemGUIDCSV from "../assets/data/GUIDs.csv?raw";
import fortuneCSV from "../assets/data/fortune.csv?raw";

import type { StatImprovement, ValueRange } from "../types/common";
import type {
  csvItemBase,
  csvArmor,
  csvWeapon,
  csvItemGUID,
  csvFortune,
} from "../types/csv";
import type {
  ItemBase,
  ItemGUID,
  ItemTier,
  Armor,
  ArmorType,
  Weapon,
  WeaponType,
} from "../types/item";
import type { Fortune } from "../types/fortune";

import { modifyTier } from "../utils/modifyTier";
import { parseCSV } from "../utils/parseCSV";
import { getRarityValueFromLabel } from "../utils/getRarity";

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

function processItemData<T extends csvItemBase>(
  item: T,
  tier: ItemTier
): ItemBase {
  const [value, label] = removeWhitespace(item.Rarity).split(":");
  const rarity = { label, value: parseInt(value) };

  const baseStats = convertBaseStats(item["Base Stats"]).map((s) => ({
    ...s,
    min: modifyTier(s.min, tier),
    max: modifyTier(s.max, tier),
  }));

  return {
    name: item.Name,
    rarity,
    baseStats,
    attributes: splitField(item.Attributes ?? "", "- "),
    droppedBy: splitField(item["Dropped By"], "- "),
    location: splitField((item.Locations ?? "").replaceAll("\n", ""), "- "),
  };
}

function processGuidData(csvGUIDs: csvItemGUID[]): ItemGUID[] {
  return csvGUIDs.map(({ Name, GUID }) => ({ label: Name, guid: GUID }));
}

function processWeaponData(
  csvWeapons: csvWeapon[],
  GUIDs: ItemGUID[],
  tier: ItemTier
): Weapon[] {
  return csvWeapons.map((weapon) => {
    const guid =
      GUIDs.find(
        ({ label }) => label.toLowerCase() === weapon.Name.toLowerCase()
      )?.guid ?? "";
    const commonData = processItemData(weapon, tier);
    const attackPower = getValueRange(weapon["Attack Power"]);

    return {
      guid,
      ...commonData,
      attackPower: modifyTieredRange(attackPower, tier),
      damageType: weapon["Damage Type"],
      type: mapWeaponType(weapon.Type),
    };
  });
}

function processArmorData(
  csvArmor: csvArmor[],
  type: ArmorType,
  GUIDs: ItemGUID[],
  tier: ItemTier
): Armor[] {
  return csvArmor.map((armor) => {
    const guid =
      GUIDs.find(
        ({ label }) => label.toLowerCase() === armor.Name.toLowerCase()
      )?.guid ?? "";
    const commonData = processItemData(armor, tier);
    const baseArmor = armor.Armor
      ? getValueRange(armor.Armor)
      : { min: -1, max: 0 };
    const baseMagicArmor = armor.Armor
      ? getValueRange(armor.Armor)
      : { min: -1, max: 0 };

    return {
      guid,
      ...commonData,
      type,
      armor: modifyTieredRange(baseArmor, tier),
      magicArmor: modifyTieredRange(baseMagicArmor, tier),
    };
  });
}

function modifyTieredRange(
  range: { min: number; max: number },
  tier: ItemTier
) {
  return {
    min: modifyTier(range.min, tier),
    max: modifyTier(range.max, tier),
  };
}

function processFortuneData(csvFortunes: csvFortune[]): Fortune[] {
  return csvFortunes.map((fortune) => ({
    name: fortune.Name,
    rarity: {
      label: fortune.Rarity,
      value: getRarityValueFromLabel(fortune.Rarity),
    },
    source: fortune.Event,
    GUID: fortune.GUID,
    image: fortune.Image,
  }));
}

export function useCsvData(tier: ItemTier = 3) {
  const [itemGUIDs, setItemGUIDs] = useState<ItemGUID[]>();
  const [weaponData, setWeaponData] = useState<Weapon[] | null>();
  const [armorData, setArmorData] = useState<Record<ArmorType, Armor[] | null>>(
    {} as Record<ArmorType, Armor[] | null>
  );
  const [fortuneData, setFortuneData] = useState<Fortune[]>([]);

  useEffect(() => {
    setItemGUIDs(processGuidData(parseCSV<csvItemGUID>(itemGUIDCSV)));
    setFortuneData(processFortuneData(parseCSV<csvFortune>(fortuneCSV)));
  }, []);

  useEffect(() => {
    if (!itemGUIDs) return;

    setWeaponData(
      processWeaponData(parseCSV<csvWeapon>(weaponCSV), itemGUIDs, tier)
    );

    const armorTypes: Record<ArmorType, string> = {
      Shield: shieldCSV,
      Head: headCSV,
      Chest: chestCSV,
      Amulet: amuletCSV,
      Ring: ringCSV,
    };

    const processedArmorData = Object.fromEntries(
      (Object.entries(armorTypes) as [ArmorType, string][]).map(
        ([type, csv]) => [
          type,
          processArmorData(parseCSV<csvArmor>(csv), type, itemGUIDs, tier),
        ]
      )
    ) as Record<ArmorType, Armor[] | null>;

    setArmorData(processedArmorData);
  }, [itemGUIDs, tier]);

  return { weaponData, armorData, fortuneData };
}

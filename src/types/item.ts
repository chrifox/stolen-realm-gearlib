import type {
  DamageType,
  KeyValuePair,
  StatImprovement,
  ValueRange,
} from "./common";

export type ItemGUID = {
  label: string;
  guid: string;
};

export type ItemTier = 0 | 1 | 2 | 3;

export type ItemBase = {
  name: string;
  rarity: KeyValuePair;

  baseStats: StatImprovement[];
  attributes: string[];
  droppedBy: string[];
  location: string[];
};

export type WeaponType =
  | { label: "Axe" | "Sword" | "Mace" | "Gun"; hands: 1 | 2 } // Can be 1H or 2H
  | { label: "Bow" | "Staff" | "Polearm"; hands: 2 } // Always 2H
  | { label: "FistWeapon" | "Wand"; hands: 1 }; // Always 1H

export type Weapon = {
  guid: string;
  type: WeaponType;
  attackPower: { min: number; max: number };
  damageType: DamageType;
} & ItemBase;

export type ArmorType = "Shield" | "Head" | "Chest" | "Amulet" | "Ring";

export type Armor = {
  guid: string;
  type: ArmorType;
  armor: ValueRange;
  magicArmor: ValueRange;
} & ItemBase;

export type SortableItem = Weapon | Armor;

export type EquippedWeapon = Weapon & { tier: ItemTier };
export type EquippedArmor = Armor & { tier: ItemTier };

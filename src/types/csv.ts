import type { DamageType } from "./common";

export type csvItemGUID = {
  Name: string;
  GUID: string;
};

export type csvItemBase = {
  Name: string;
  Rarity: string; // "number: name"
  "Base Stats": string; // "- Might {3, 20}\n   - Intelligence {3, 20}"
  Attributes: string | null;
  "Dropped By": string;
  Locations: string | null; // for some crazy reason weapon and shield is "Location" - just manually changed this in csv files for now
};

export type csvWeapon = {
  Type: string;
  "Attack Power": string; // "{14.5, 96.5}"
  "Damage Type": DamageType;
} & csvItemBase;

export type csvArmor = {
  Armor: string;
  "Magic Armor": string;
} & csvItemBase;

export type csvFortune = {
  Name: string;
  Description: string;
  Rarity: string;
  Event: string;
  GUID: string;
  Location: string;
};

export type DamageType =
  | "Physical"
  | "Cold"
  | "Fire"
  | "Holy"
  | "Shadow"
  | "Lightning";

export type Stat =
  | "Might"
  | "Dexterity"
  | "Vitality"
  | "Intelligence"
  | "Reflex";

export type ValueRange = {
  min: number;
  max: number;
};

export type KeyValuePair = {
  value: number;
  label: string;
};

export type StatImprovement = {
  label: string;
} & ValueRange;

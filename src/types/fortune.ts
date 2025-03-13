import type { KeyValuePair } from "./common";

export type Fortune = {
  name: string;
  description: string;
  rarity: KeyValuePair;
  source: string;
  GUID: string;
  location: string;
};

import { ItemTier } from "../types/item";

export function modifyTier(stat: number, tier: ItemTier): number {
  return Math.floor(stat * 0.5) * tier + stat;
}

// this file is not in use, just for reference right now

// tier calc provided by "Searching For a Name"
// private int tieredValue(int value, Rarity rarity, int tier) {
//   if(value == 0) return 0;
//   if(value == 40) return 40 + 20 * tier;

//   int baseValue = (int) Math.floor(value / 6.8 / getRarityLabelFromValue.getRarityScaling());
//   double actualValue = baseValue * 6.8 * getRarityLabelFromValue.getRarityScaling();

//   int tiered = (int) Math.ceil(actualValue * 0.5 * (tier + 2));
//   return tiered;
// }

// known scaling values
export const ITEM_SCALING_VALUES = {
  weaponDamagePerLevel: 20,
  weaponDamagePerRarity: 10,
  itemStatsPerLevel: 20,
  itemArmorPerLevel: 20,
  itemStatsPerRarity: 10,
};

export function getActualItemValue(
  itemBaseValue: number,
  rarityValue: number,
  level: number,
  multipliers: number[]
): number {
  let finalValue = itemBaseValue;
  const rarityMod = 1 + rarityValue * 0.1;
  const levelMod = level === 1 ? 1 : 1.2 * (level - 1);
  finalValue = Math.ceil(Math.ceil(finalValue * rarityMod) * levelMod);
  if (multipliers.length) {
    multipliers.forEach((mod) => finalValue * mod);
  }
  return finalValue;
}
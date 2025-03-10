export function getRarityValueFromLabel(rarityLabel: string) {
  switch (rarityLabel) {
    case "Mythic":
      return 4;
    case "Legendary":
      return 3;
    case "Rare":
      return 2;
    case "Uncommon":
      return 1;
    case "Common":
    default:
      return 0;
  }
}

export function getRarityLabelFromValue(rarityValue: number) {
  switch (rarityValue) {
    case 4:
      return "Mythic";
    case 3:
      return "Legendary";
    case 2:
      return "Rare";
    case 1:
      return "Uncommon";
    case 0:
      return "Common";
    default:
      return "";
  }
}

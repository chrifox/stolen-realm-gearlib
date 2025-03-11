const baseURL = import.meta.env.BASE_URL;

export function getFortuneImagePath(fortuneName: string): string {
  const formattedFortuneName = fortuneName
    .toLowerCase()
    .replaceAll("'", "")
    .replace(/ /g, "_");
  return `${baseURL}images/fortunes/${formattedFortuneName}_fortune.webp`;
}

export function getItemSlotImagePath(slot: string): string {
  return `${baseURL}images/item_slots/${slot}.png`;
}

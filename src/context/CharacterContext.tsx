import { createContext, useContext, useState, ReactNode } from "react";
import { Armor, Weapon } from "../types/item";

type EquipmentSlot =
  | "hand1"
  | "hand2"
  | "head"
  | "chestplate"
  | "ring"
  | "amulet";

type Equipment = {
  hand1: Weapon | null; // Must be a Weapon
  hand2: Weapon | Armor | null; // Can be a Weapon or Shield
  head: string | null;
  chestplate: string | null;
  ring: string | null;
  amulet: string | null;
};

type CharacterContextType = {
  equipment: Equipment;
  equipItem: (slot: EquipmentSlot, item: any) => void;
  unequipItem: (slot: EquipmentSlot) => void;
};

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

// Provider Component
export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [equipment, setEquipment] = useState<Equipment>({
    hand1: null,
    hand2: null,
    head: null,
    chestplate: null,
    ring: null,
    amulet: null,
  });

  const equipItem = () =>
    // slot: EquipmentSlot, item: Weapon | Armor
    {
      setEquipment((prev) => {
        // // Ensure hand1 is always a weapon
        // if (slot === "hand1" && item instanceof Shield) {
        //   return prev; // Ignore invalid equip
        // }

        // // If equipping a 2H weapon, clear hand2
        // if (slot === "hand1" && item instanceof Weapon && item.type === "2H") {
        //   return { ...prev, hand1: item, hand2: null };
        // }

        // // If equipping a shield in hand2, ensure conditions are met
        // if (slot === "hand2" && item instanceof Shield) {
        //   if (!prev.hand1) return prev; // Must have a weapon in hand1 first
        //   if (prev.hand1 instanceof Weapon && prev.hand1.type === "2H") return prev; // No shield with 2H weapon
        // }

        // return { ...prev, [slot]: item };
        return prev;
      });
    };

  const unequipItem = (slot: EquipmentSlot) => {
    setEquipment((prev) => ({
      ...prev,
      [slot]: null,
    }));
  };

  return (
    <CharacterContext.Provider value={{ equipment, equipItem, unequipItem }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Custom hook to use context
export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
};

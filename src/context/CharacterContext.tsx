import { createContext, useContext, useState, type ReactNode } from "react";

import type {
  EquippedArmor,
  EquippedWeapon,
  Armor,
  Weapon,
} from "../types/item";

import type { Fortune } from "../types/fortune";

function isWeapon(item: unknown): item is Weapon {
  return (item as Weapon).type?.hands !== undefined;
}

function is1hMeleeWeapon(weapon: Weapon) {
  return (
    ["Axe", "Sword", "Mace", "FistWeapon"].includes(weapon.type.label) &&
    weapon.type.hands === 1
  );
}

function isArmor(item: unknown): item is Armor {
  return (item as Armor).type !== undefined;
}

export type EquipmentSlot =
  | "hand1"
  | "hand2"
  | "head"
  | "chestplate"
  | "ring"
  | "amulet";

export type Stats = {
  might: number;
  dexterity: number;
  vitality: number;
  intelligence: number;
  reflex: number;
};

export type Equipment = {
  hand1: EquippedWeapon | null; // Must be a Weapon
  hand2: EquippedWeapon | EquippedArmor | null; // Can be a Weapon or Shield
  head: EquippedArmor | null;
  chestplate: EquippedArmor | null;
  ring: EquippedArmor | null;
  amulet: EquippedArmor | null;
};

type CharacterContextType = {
  stats: Stats;
  equipment: Equipment;
  fortunes: Fortune[];
  equipItem: (item: EquippedWeapon | EquippedArmor) => void; // Removed slot from here
  unequipItem: (slot: EquipmentSlot) => void;
  updateStat: (label: string, value: number) => void;
  equipFortune: (fortune: Fortune) => void;
  unequipFortune: (fortune: Fortune) => void;
};

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export const CharacterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [stats, setStats] = useState<Stats>({
    might: 8,
    dexterity: 8,
    vitality: 8,
    intelligence: 8,
    reflex: 8,
  });
  const [equipment, setEquipment] = useState<Equipment>({
    hand1: null,
    hand2: null,
    chestplate: null,
    head: null,
    ring: null,
    amulet: null,
  });
  const [fortunes, setFortunes] = useState<Fortune[]>([]);

  const updateStat = (label: string, value: number) => {
    setStats((previousStats) => ({
      ...previousStats,
      [label]: value,
    }));
  };

  const equipItem = (item: EquippedWeapon | EquippedArmor) => {
    setEquipment((prev) => {
      if (isWeapon(item)) {
        if (item.type.hands === 2) {
          return { ...prev, hand1: item, hand2: null };
        }

        if (item.type.hands === 1) {
          if (!prev.hand1) {
            return { ...prev, hand1: item };
          }

          const existingHand1 = prev.hand1;
          const existingHand2 = prev.hand2;

          if (!existingHand2) {
            if (
              item.type.label === "Wand" &&
              existingHand1.type.label === "Wand"
            ) {
              return { ...prev, hand2: item }; // Equip second wand to hand2
            }
            if (
              item.type.label === "Gun" &&
              existingHand1.type.label === "Gun"
            ) {
              return { ...prev, hand2: item }; // Equip second gun to hand2
            }
            if (is1hMeleeWeapon(item) && is1hMeleeWeapon(existingHand1)) {
              return { ...prev, hand2: item }; // Equip second melee weapon if 1H
            }
            return { ...prev, hand1: item, hand2: null }; // Replace hand1, clear hand2
          }

          if (
            (item.type.label === "Wand" &&
              existingHand1.type.label === "Wand") ||
            (item.type.label === "Gun" && existingHand1.type.label === "Gun") ||
            (is1hMeleeWeapon(item) && is1hMeleeWeapon(existingHand1))
          ) {
            return { ...prev, hand1: item, hand2: existingHand2 }; // Replace hand1 but keep hand2
          }

          return { ...prev, hand1: item, hand2: null }; // Incompatible weapon, replace hand1, clear hand2
        }
      }

      if (isArmor(item)) {
        switch (item.type) {
          case "Head":
            return { ...prev, head: item };
          case "Chest":
            return { ...prev, chestplate: item };
          case "Ring":
            return { ...prev, ring: item };
          case "Amulet":
            return { ...prev, amulet: item };
          case "Shield":
            if (prev.hand1 && prev.hand1.type.hands === 2) {
              return { ...prev, hand1: null, hand2: item };
            }
            return { ...prev, hand2: item };
        }
      }

      return prev;
    });
  };

  const unequipItem = (slot: EquipmentSlot) => {
    setEquipment((prev) => ({
      ...prev,
      [slot]: null,
    }));
  };

  const equipFortune = (fortune: Fortune) => {
    setFortunes((equippedFortunes) =>
      equippedFortunes.some((f) => f.GUID === fortune.GUID) ||
      equippedFortunes.length >= 4
        ? equippedFortunes
        : [...equippedFortunes, fortune]
    );
  };

  const unequipFortune = (fortune: Fortune) => {
    setFortunes((prev) => prev.filter((f) => f.GUID !== fortune.GUID));
  };

  return (
    <CharacterContext.Provider
      value={{
        stats,
        equipment,
        fortunes,
        updateStat,
        equipItem,
        unequipItem,
        equipFortune,
        unequipFortune,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
};

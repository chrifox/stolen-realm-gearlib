import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { type DamageType, type Stat, type KeyValuePair } from "../types/common";
import { type ItemTier } from "../types/item";

export type SortOrder = "asc" | "desc";

export type ItemType = "Armor" | "Weapon";

export const RARITIES: KeyValuePair[] = [
  { value: 0, label: "Common" },
  { value: 1, label: "Uncommon" },
  { value: 2, label: "Rare" },
  { value: 3, label: "Legendary" },
  { value: 4, label: "Mythic" },
];

export const STATS: Stat[] = [
  "Might",
  "Dexterity",
  "Vitality",
  "Intelligence",
  "Reflex",
];

export const DAMAGE_TYPES: DamageType[] = [
  "Physical",
  "Cold",
  "Fire",
  "Holy",
  "Shadow",
  "Lightning",
];

const FilterSortContext = createContext<{
  // sorting
  sortField: string;
  setSortField: Dispatch<SetStateAction<string>>;
  sortOrder: "asc" | "desc";
  setSortOrder: () => void;
  statSort: string;
  setStatSort: Dispatch<SetStateAction<string>>;
  showDetails: boolean;
  setShowDetails: () => void;
  setCurrentItemType: Dispatch<SetStateAction<ItemType>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;

  // filtering
  rarityFilter: number[];
  setRarityFilter: (rarityValue: number) => void;
  statFilter: Stat[];
  setStatFilter: (stat: Stat) => void;
  damageTypeFilter: DamageType[];
  setDamageTypeFilter: (damageType: DamageType) => void;

  // misc
  tier: ItemTier;
  setTier: Dispatch<SetStateAction<ItemTier>>;
} | null>(null);

export const useFilterSortContext = () => {
  const context = useContext(FilterSortContext);
  if (!context) {
    throw new Error("useSortContext must be used within a SortProvider");
  }
  return context;
};

export const FilterSortContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [sortField, setSortField] = useState<string>("rarity");
  const [statSort, setStatSort] = useState<string>("");
  const [currentItemType, setCurrentItemType] = useState<ItemType>("Weapon");

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [tier, setTier] = useState<ItemTier>(3);

  const [rarityFilter, setRarityFilter] = useState<number[]>([]);
  const [statFilter, setStatFilter] = useState<Stat[]>([]);
  const [damageTypeFilter, setDamageTypeFilter] = useState<DamageType[]>([]);

  function handleSetRarityFilter(rarityValue: number) {
    setRarityFilter((prev: number[]) =>
      prev.includes(rarityValue)
        ? prev.filter((r) => r !== rarityValue)
        : [...prev, rarityValue]
    );
  }

  function handleSetStatFilter(stat: Stat) {
    setStatFilter((prev: Stat[]) =>
      prev.includes(stat) ? prev.filter((s) => s !== stat) : [...prev, stat]
    );
  }

  function handleSetDamageTypeFilter(damageType: DamageType) {
    setDamageTypeFilter((prev: DamageType[]) =>
      prev.includes(damageType)
        ? prev.filter((dt) => dt !== damageType)
        : [...prev, damageType]
    );
  }

  useEffect(() => {
    if (statSort) {
      setSortField("stat");
    }
  }, [statSort]);

  useEffect(() => {
    if (sortField !== "stat") {
      setStatSort("");
    }
  }, [sortField]);

  useEffect(() => {
    if (currentItemType === "Weapon") {
      // Reset fields that are not valid for weapons
      if (sortField === "armor" || sortField === "magicArmor") {
        setSortField("rarity");
      }
    } else if (currentItemType === "Armor") {
      // Reset fields that are not valid for armor
      setDamageTypeFilter([]);
      if (sortField === "attackPower") {
        setSortField("rarity");
      }
    }
  }, [currentItemType, sortField]);

  return (
    <FilterSortContext.Provider
      value={{
        sortField,
        setSortField,
        sortOrder,
        setSortOrder: () => setSortOrder(sortOrder === "asc" ? "desc" : "asc"),
        statSort,
        setStatSort,
        showDetails,
        setShowDetails: () =>
          setShowDetails((wasShowing: boolean) => !wasShowing),
        setCurrentItemType,
        searchTerm,
        setSearchTerm,

        tier,
        setTier,

        rarityFilter,
        setRarityFilter: handleSetRarityFilter,
        statFilter,
        setStatFilter: handleSetStatFilter,
        damageTypeFilter,
        setDamageTypeFilter: handleSetDamageTypeFilter,
      }}
    >
      {children}
    </FilterSortContext.Provider>
  );
};

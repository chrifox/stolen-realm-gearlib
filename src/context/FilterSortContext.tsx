import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { type KeyValuePair } from "../types/common";
import { type ItemTier } from "../types/item";

export type SortOrder = "asc" | "desc";

export type ItemType = "Armor" | "Weapon";

export const RARITIES: KeyValuePair[] = [
  { value: 0, label: "Common" },
  { value: 1, label: "Uncommon" },
  { value: 2, label: "Rare" },
  { value: 3, label: "Epic" },
  { value: 4, label: "Legendary" },
];

export const STATS = [
  "Might",
  "Dexterity",
  "Vitality",
  "Intelligence",
  "Reflex",
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
  statFilter: string[];
  setStatFilter: (stat: string) => void;

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
  const [statFilter, setStatFilter] = useState<string[]>([]);

  function handleSetRarityFilter(rarityValue: number) {
    setRarityFilter((prev: number[]) =>
      prev.includes(rarityValue)
        ? prev.filter((r) => r !== rarityValue)
        : [...prev, rarityValue]
    );
  }

  function handleSetStatFilter(stat: string) {
    setStatFilter((prev: string[]) =>
      prev.includes(stat) ? prev.filter((s) => s !== stat) : [...prev, stat]
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
      }}
    >
      {children}
    </FilterSortContext.Provider>
  );
};

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { type ItemTier } from "../types/item";

export type SortOrder = "asc" | "desc";

export type ItemType = "Armor" | "Weapon";

const SortContext = createContext<{
  sortField: string;
  setSortField: Dispatch<SetStateAction<string>>;
  sortOrder: "asc" | "desc";
  setSortOrder: () => void;
  statFilter: string;
  setStatFilter: Dispatch<SetStateAction<string>>;
  showDetails: boolean;
  setShowDetails: () => void;
  setCurrentItemType: Dispatch<SetStateAction<ItemType>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  tier: ItemTier;
  setTier: Dispatch<SetStateAction<ItemTier>>;
} | null>(null);

export const useSortContext = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSortContext must be used within a SortProvider");
  }
  return context;
};

export const SortContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<string>("rarity");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [statFilter, setStatFilter] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [currentItemType, setCurrentItemType] = useState<ItemType>("Weapon");
  const [tier, setTier] = useState<ItemTier>(3);

  useEffect(() => {
    if (statFilter) {
      setSortField("stat");
    }
  }, [statFilter]);

  useEffect(() => {
    if (sortField !== "stat") {
      setStatFilter("");
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
    <SortContext.Provider
      value={{
        sortField,
        setSortField,
        sortOrder,
        setSortOrder: () => setSortOrder(sortOrder === "asc" ? "desc" : "asc"),
        statFilter,
        setStatFilter,
        showDetails,
        setShowDetails: () =>
          setShowDetails((wasShowing: boolean) => !wasShowing),
        setCurrentItemType,
        searchTerm,
        setSearchTerm,
        tier,
        setTier,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

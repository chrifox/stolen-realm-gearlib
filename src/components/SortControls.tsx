type SortControlsProps = {
  setSortField: (field: string) => void;
  setSortOrder: () => void;
  sortOrder: string;
  setStatFilter: (stat: string) => void;
  statFilter: string;
  setShowDetails: () => void;
  showDetails: boolean;
  itemType: "Armor" | "Weapon";
};

export const SortControls = ({
  setSortField,
  setSortOrder,
  sortOrder,
  setStatFilter,
  statFilter,
  setShowDetails,
  showDetails,
  itemType,
}: SortControlsProps) => (
  <div className="sort-controls">
    Sorting:
    <button onClick={setSortOrder}>{sortOrder}</button>
    <button onClick={() => setSortField("name")}>Name</button>
    {itemType === "Armor" ? (
      <>
        <button onClick={() => setSortField("armor")}>Armor</button>
        <button onClick={() => setSortField("magicArmor")}>Magic Armor</button>
      </>
    ) : (
      <button onClick={() => setSortField("attackPower")}>Attack Power</button>
    )}
    <button onClick={() => setSortField("rarity")}>Rarity</button>
    <button onClick={() => setSortField("stat")}>Stat</button>
    <select onChange={(e) => setStatFilter(e.target.value)} value={statFilter}>
      <option disabled value="">
        Select Stat
      </option>
      <option value="Might">Might</option>
      <option value="Dexterity">Dexterity</option>
      <option value="Vitality">Vitality</option>
      <option value="Intelligence">Intelligence</option>
      <option value="Reflex">Reflex</option>
    </select>
    <button onClick={setShowDetails}>
      {showDetails ? "Hide" : "Show"} details
    </button>
  </div>
);

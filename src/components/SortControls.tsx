import { ChangeEvent } from "react";
import { styled } from "styled-components";

import { type ItemType, useSortContext } from "../context/SortContext";

const SortControlsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;

  .search {
    margin-left: auto;
  }
`;

export const SortControls = ({ itemType }: { itemType: ItemType }) => {
  const {
    setSortField,
    setSortOrder,
    sortOrder,
    setStatFilter,
    statFilter,
    setShowDetails,
    showDetails,
    searchTerm,
    setSearchTerm,
  } = useSortContext();

  function handleUpdateSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <SortControlsContainer className="sort-controls">
      Sorting:
      <button onClick={setSortOrder}>{sortOrder}</button>
      <button onClick={() => setSortField("name")}>Name</button>
      {itemType === "Armor" ? (
        <>
          <button onClick={() => setSortField("armor")}>Armor</button>
          <button onClick={() => setSortField("magicArmor")}>
            Magic Armor
          </button>
        </>
      ) : (
        <button onClick={() => setSortField("attackPower")}>
          Attack Power
        </button>
      )}
      <button onClick={() => setSortField("rarity")}>Rarity</button>
      <button onClick={() => setSortField("stat")}>Stat</button>
      <select
        onChange={(e) => setStatFilter(e.target.value)}
        value={statFilter}
      >
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
      <label className="search">
        Search:&nbsp;
        <input
          type="search"
          onChange={handleUpdateSearchTerm}
          value={searchTerm}
        />
      </label>
    </SortControlsContainer>
  );
};

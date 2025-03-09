import { ChangeEvent } from "react";
import { css, styled } from "styled-components";

import {
  DAMAGE_TYPES,
  type ItemType,
  RARITIES,
  STATS,
  useFilterSortContext,
} from "../context/FilterSortContext";
import { type ItemTier } from "../types/item";

const FilterSortControlsContainer = styled.div`
  width: 100%;

  .misc-controls,
  .sort-controls,
  .filter-controls {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 4px;
    width: 100%;
  }

  .sort-controls {
    .search {
      margin-left: auto;
    }
  }

  .filter-controls {
  }
`;

const SortControlButton = styled.button<{ $active?: boolean }>`
  ${({ $active }) =>
    $active
      ? css`
          background: forestgreen;
        `
      : ""}
`;

export const FilterSortControls = ({ itemType }: { itemType: ItemType }) => {
  const {
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    statSort,
    setStatSort,
    showDetails,
    setShowDetails,
    searchTerm,
    setSearchTerm,

    tier,
    setTier,

    rarityFilter,
    setRarityFilter,
    statFilter,
    setStatFilter,
    damageTypeFilter,
    setDamageTypeFilter,
  } = useFilterSortContext();

  function handleUpdateSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <FilterSortControlsContainer className="sort-controls">
      <div className="misc-controls">
        <button onClick={setShowDetails}>
          {showDetails ? "Hide" : "Show"} item details
        </button>
        <label>
          Tier:{" "}
          <select
            onChange={(e) => setTier(parseInt(e.target.value) as ItemTier)}
            value={tier}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
      </div>
      <div className="sort-controls">
        Sorting:
        <button onClick={setSortOrder}>{sortOrder}</button>
        <SortControlButton
          onClick={() => setSortField("name")}
          $active={sortField === "name"}
        >
          Name
        </SortControlButton>
        {itemType === "Armor" ? (
          <>
            <SortControlButton
              onClick={() => setSortField("armor")}
              $active={sortField === "armor"}
            >
              Armor
            </SortControlButton>
            <SortControlButton
              onClick={() => setSortField("magicArmor")}
              $active={sortField === "magicArmor"}
            >
              Magic Armor
            </SortControlButton>
          </>
        ) : (
          <SortControlButton
            onClick={() => setSortField("attackPower")}
            $active={sortField === "attackPower"}
          >
            Attack Power
          </SortControlButton>
        )}
        <SortControlButton
          onClick={() => setSortField("rarity")}
          $active={sortField === "rarity"}
        >
          Rarity
        </SortControlButton>
        <label>
          Stat:{" "}
          <select
            onChange={(e) => setStatSort(e.target.value)}
            value={statSort}
          >
            <option value="">None</option>
            {STATS.map((stat) => (
              <option key={`stat-sort-option-${stat}`} value={stat}>
                {stat}
              </option>
            ))}
          </select>
        </label>
        <label className="search">
          Search:&nbsp;
          <input
            type="search"
            onChange={handleUpdateSearchTerm}
            value={searchTerm}
          />
        </label>
      </div>

      <div className="filter-controls">
        Filtering:
        <fieldset>
          <legend>Rarity:</legend>
          {RARITIES.map((rarity) => (
            <label key={rarity.value} style={{ display: "block" }}>
              <input
                type="checkbox"
                value={rarity.value}
                checked={rarityFilter.includes(rarity.value)}
                onChange={() => setRarityFilter(rarity.value)}
              />
              {rarity.label}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Stats:</legend>
          {STATS.map((stat) => (
            <label key={stat} style={{ display: "block" }}>
              <input
                type="checkbox"
                value={stat}
                checked={statFilter.includes(stat)}
                onChange={() => setStatFilter(stat)}
              />
              {stat}
            </label>
          ))}
        </fieldset>
        {itemType === "Weapon" && (
          <fieldset>
            <legend>Damage Type:</legend>
            {DAMAGE_TYPES.map((damageType) => (
              <label key={damageType} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  value={damageType}
                  checked={damageTypeFilter.includes(damageType)}
                  onChange={() => setDamageTypeFilter(damageType)}
                />
                {damageType}
              </label>
            ))}
          </fieldset>
        )}
      </div>
    </FilterSortControlsContainer>
  );
};

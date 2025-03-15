import { type ChangeEvent } from "react";
import { styled } from "styled-components";

import {
  type ItemType,
  DAMAGE_TYPES,
  RARITIES,
  STATS,
  useFilterSortContext,
} from "../context/FilterSortContext";
import type { ItemTier } from "../types/item";
import { Search } from "./Search";

const FilterSortControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  background: ${({ theme }) => theme.colors.background};
  padding: 4px;
  width: 100%;

  section {
    display: flex;
    flex-flow: column wrap;
    gap: 4px;
  }

  .misc-controls,
  .sort-controls,
  .filter-controls {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 4px;
  }

  .misc-controls {
    justify-content: flex-end;
  }

  .filter-controls {
    fieldset {
      label {
        display: block;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row-reverse;
  }
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
    <FilterSortControlsContainer>
      <section>
        <Search onChange={handleUpdateSearchTerm} value={searchTerm} />
        <div className="misc-controls">
          <button onClick={setShowDetails}>
            {showDetails ? "Hide" : "Show"} details
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
      </section>

      <section>
        <div className="sort-controls">
          <button onClick={setSortOrder}>{sortOrder}</button>
          <label>
            by:{" "}
            <select onChange={(e) => setSortField(e.target.value)}>
              <option value="rarity">Rarity</option>
              <option value="name">Name</option>
              <option value="stat">Stat</option>
              {itemType === "Weapon" && (
                <option value="attackPower">Attack Power</option>
              )}
              {itemType === "Armor" && (
                <>
                  <option value="armor">Armor</option>
                  <option value="magicArmor">Magic Armor</option>
                </>
              )}
            </select>
          </label>
          {sortField === "stat" && (
            <label>
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
          )}
        </div>

        <div className="filter-controls">
          <fieldset>
            <legend>Rarity</legend>
            {RARITIES.map((rarity) => (
              <label key={rarity.value}>
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
            <legend>Stats</legend>
            {STATS.map((stat) => (
              <label key={stat}>
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
              <legend>Damage Type</legend>
              {DAMAGE_TYPES.map((damageType) => (
                <label key={damageType}>
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
      </section>
    </FilterSortControlsContainer>
  );
};

import ErrorBoundary from "./components/ErrorBoundary";
import { CharacterContextProvider } from "./context/CharacterContext";
import { FilterSortContextProvider } from "./context/FilterSortContext";
import { Layout } from "./components/Layout";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <CharacterContextProvider>
        <FilterSortContextProvider>
          <Layout />
        </FilterSortContextProvider>
      </CharacterContextProvider>
    </ErrorBoundary>
  );
}

export default App;

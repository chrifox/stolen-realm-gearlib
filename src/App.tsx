import { Routes, Route } from "react-router-dom";

import { CharacterContextProvider } from "./context/CharacterContext";
import { FilterSortContextProvider } from "./context/FilterSortContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { Layout } from "./components/Layout";

const baseURL = import.meta.env.BASE_URL;

function App() {
  return (
    <ErrorBoundary>
      <CharacterContextProvider>
        <FilterSortContextProvider>
          <Routes>
            <Route path={baseURL} element={<Layout />} />
          </Routes>
        </FilterSortContextProvider>
      </CharacterContextProvider>
    </ErrorBoundary>
  );
}

export default App;

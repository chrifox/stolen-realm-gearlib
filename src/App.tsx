import ErrorBoundary from "./components/ErrorBoundary";
import { CharacterContextProvider } from "./context/CharacterContext";
import { SortContextProvider } from "./context/SortContext";
import { Layout } from "./components/Layout";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <CharacterContextProvider>
        <SortContextProvider>
          <Layout />
        </SortContextProvider>
      </CharacterContextProvider>
    </ErrorBoundary>
  );
}

export default App;

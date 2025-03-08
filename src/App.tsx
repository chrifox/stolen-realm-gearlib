import { CharacterContextProvider } from "./context/CharacterContext";
import { Layout } from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <CharacterContextProvider>
        <Layout />
      </CharacterContextProvider>
    </ErrorBoundary>
  );
}

export default App;

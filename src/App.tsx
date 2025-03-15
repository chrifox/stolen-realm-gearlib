import { styled } from "styled-components";

import { CharacterContextProvider } from "./context/CharacterContext";
import { FilterSortContextProvider } from "./context/FilterSortContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { Layout } from "./components/Layout";

const disclaimerMessage =
  "This is a community made tool, as such numbers may not be 100% accurate.";

const Footer = styled.div`
  padding: 4px;
  width: 100%;

  .disclaimer {
    color: red;
  }
`;

function App() {
  return (
    <ErrorBoundary>
      <CharacterContextProvider>
        <FilterSortContextProvider>
          <Layout />
          <Footer>
            <div className="disclaimer">{`Disclaimer: ${disclaimerMessage}`}</div>
          </Footer>
        </FilterSortContextProvider>
      </CharacterContextProvider>
    </ErrorBoundary>
  );
}

export default App;

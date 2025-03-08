import ErrorBoundary from "./components/ErrorBoundary";
import { Layout } from "./components/Layout";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;

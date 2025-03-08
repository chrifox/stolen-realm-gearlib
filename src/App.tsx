import { DataLayer } from "./DataLayer";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <DataLayer />
    </ErrorBoundary>
  );
}

export default App;

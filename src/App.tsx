import "./App.css";
import { UsingState } from "./errorHanlding/usingState";
import { UsingErrorBoundaries } from "./errorHanlding/usingErrorBoundaries";
import { UsingTheRightWay } from "./errorHanlding/usingTheRightWay";
import { ErrorBoundary } from "react-error-boundary";
import { ProductsFetchingError } from "./components/errorsFallbacks/ErrorBoundrayComponent";
import { StandardErrorBoundary } from "./errorHanlding/StandardErrorBoundry";

/**
 * react-error-boundary is a react library that handles errors with error boundaries but with extended functionality.
 * Can handle fetch error.
 * You can pass fallback components for each boundary.
 * onError and and onReset functions to handle different cases.
 */

function App() {
  return (
    <div className="App">
      {/* <UsingState /> */}
      {/* <StandardErrorBoundary>
        <UsingErrorBoundaries />
      </StandardErrorBoundary> */}

      <ErrorBoundary
        FallbackComponent={ProductsFetchingError}
        onError={() => console.log("Error happened!")}

      >
        <UsingTheRightWay />
      </ErrorBoundary>
    </div>
  );
}

export default App;

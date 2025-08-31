import {
  FallbackProps,
} from "react-error-boundary";

/**
 * Skelton or fallback component to the ErrorBoundary.
 * Render when Products Fetching Error happens.
 * Made especially for react-error-boundary lib.
 * provides a type for props "FallbackProps", the error itself and a resetErrorBoundary to reset the component.
 */


export function ProductsFetchingError(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;

  return (
    <div className="error-page min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-red-600 mb-4">Error!! 🌍</h1>
        <p className="text-2xl text-gray-300 font-semibold">{error.message}</p>
        <button className="mt-4" onClick={resetErrorBoundary}>
          Reload Page
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { ProductsFetchingError } from "../components/errorsFallbacks/ProductsFetchingError";

/**
 * Error boundary is a special class component to handle errors in react
 * The idea is to use this component to wrap some parts or all of the components tree so that this component renders 
 * whenever an error happens.
 * It can only be a class component because we use methods like getDerivedStateFromError to capture the error and 
 * componentDidCatch to run some logic when th error is captured and they are only available in class components.
 * It only captures rendering related errors (doesn't capture fetch errors) so we use lib like react-error-boundary. 
 
 */

export class StandardErrorBoundary extends React.Component<any, any> {
  state: {
    hasError: boolean;
    error?: Error;
  };

  //this happens when a new component gets created (capture passed props, initialize the state)
  constructor(props: any) {
    super(props);

    // to keep track of when an error occurs
    // and the error itself
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  // update the component state when an error occurs, this method captures component's error state
  static getDerivedStateFromError(error) {
    // specify that the error boundary has caught an error
    return {
      hasError: true,
      error: error,
    };
  }

  // Log the error to some sort of a service logger (this is a life cycle method runs whenever an error happens)
  componentDidCatch(error, errorInfo) {
    console.log("Error caught!");
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    // if an error occurred
    if (this.state.hasError) {
      return <ProductsFetchingError error={this.state.error?.message || ""} />;
    } else {
      // default behavior
      return this.props.children;
    }
  }
}

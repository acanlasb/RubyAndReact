import {useState} from "react"
import React from "react";
const ErrorBoundary = (props) => {
const [hasError, setHasE]

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //log the error to an error reporting service
    errorService.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong.</h1>;
    }
    return this.props.children;
  }
}

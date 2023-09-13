class ErrorBoundary extends React.Component {
state = {
          error: ''
}

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: error.toString() };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

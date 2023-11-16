import { Component, ReactNode } from 'react';
import { ErrorPage } from 'views/Error';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <ErrorPage
          isErrorException
          messageError={error?.message}
          onRedirect={() => this.setState({ hasError: false })}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

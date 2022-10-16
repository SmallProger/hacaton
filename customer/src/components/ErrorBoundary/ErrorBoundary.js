import React from 'react';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { catchError: false }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ catchError: true });
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.catchError) {
      return <ErrorIndicator />;
    } else {
      return this.props.children;
    }
  }
}
export { ErrorBoundary }
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 발생 시 필요한 작업을 수행할 수 있습니다.
    // 예를 들어, 에러 로깅, 사용자에게 알리는 등의 처리를 할 수 있습니다.
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);
    // this.setState({ hasError: true }); // 에러 상태를 업데이트할 수도 있습니다.
  }

  render() {
    if (this.state.hasError) {
      // 에러 발생 시 보여줄 대체 컨텐츠를 반환합니다.
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
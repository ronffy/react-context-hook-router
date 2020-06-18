/**
 * @description 错误边界
 * @author ronffy
 * @Date 2020-06-18 14:17:57
 * @LastEditTime 2020-06-18 14:20:29
 * @LastEditors ronffy
 */
import * as React from 'react';

export interface ErrorBoundaryProps {
}
 
export interface ErrorBoundaryState {
  hasError: boolean
}
 
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return {
      hasError: true
    }
  }

  componentDidCatch(e) {
    console.log('componentDidCatch', e);
  }

  render() { 
    // if (this.state.hasError) {
      
    // }
    return this.props.children
  }
}
 
export default ErrorBoundary;
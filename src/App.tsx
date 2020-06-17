/**
 * @description 
 * @author ronffy
 * @Date 2020-06-04 17:53:23
 * @LastEditTime 2020-06-17 17:17:18
 * @LastEditors ronffy
 */
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return {
      hasError: true
    }
  }

  componentDidCatch(e) {
    console.log('app-componentDidCatch', e);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return null;
    }
    
    return (
      <div>
        start
      </div>
    )
  }
}

export default App;

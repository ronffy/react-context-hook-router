/**
 * @description 
 * @author ronffy
 * @Date 2020-06-04 17:53:23
 * @LastEditTime 2020-06-18 17:37:31
 * @LastEditors ronffy
 */
import React from 'react';
import { useContext } from 'react';
import AppContext from 'AppContext';
import './App.css';

const App = ({
  children
}) => {
  const { routing, history} = useContext(AppContext);
  console.log('app', routing.location);
  
  const handleClick = () => {
    history.push('home')
  }

  return (
    <div>
      <div onClick={handleClick}>跳转到首页</div>
      {
        children
      }
    </div>
  )
}


export default App;

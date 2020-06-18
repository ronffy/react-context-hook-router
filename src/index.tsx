/**
 * @description 
 * @author ronffy
 * @Date 2020-06-04 17:53:23
 * @LastEditTime 2020-06-18 17:35:36
 * @LastEditors ronffy
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';
import * as serviceWorker from './serviceWorker';
import storage from './utils/storage';
import { prefix } from './config';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

storage.register(prefix);

ReactDOM.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

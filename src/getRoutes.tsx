/**
 * @description 
 * @author ronffy
 * @Date 2020-06-18 19:08:34
 * @LastEditTime 2020-06-18 19:11:56
 * @LastEditors ronffy
 */
import * as React from 'react';
import About from 'routes/About';
import Home from './routes/Home/index';

function getRoutes() {
  const routers = [
    {
      path: '/detail',
      component: React.lazy(() => import('./routes/Detail'))
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]

  return routers;
}

export default getRoutes
/**
 * @description 
 * @author ronffy
 * @Date 2020-06-18 19:08:34
 * @LastEditTime 2020-06-19 15:28:55
 * @LastEditors ronffy
 */
import * as React from 'react';
import About from './routes/About';
import Home from './routes/Home';

function getRoutes() {
  const routes = [
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

  return routes;
}

export default getRoutes
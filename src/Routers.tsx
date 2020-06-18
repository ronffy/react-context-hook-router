/**
 * @description 
 * @author ronffy
 * @Date 2020-06-18 14:22:22
 * @LastEditTime 2020-06-18 19:18:13
 * @LastEditors ronffy
 */
import {
  Switch,
  Route,
} from 'react-router-dom';
import React, { useMemo, useReducer, Suspense } from 'react';
import { Provider } from 'AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import reducer, { AppReducer } from './reducer';
import useRouting from './hooks/useRouting';
import App from './App';
import Error from 'routes/Error';
import getRoutes from './getRoutes'

const routes = getRoutes();

export interface RoutersProps {

}

const Routers: React.SFC<RoutersProps> = () => {
  const [routing, history] = useRouting();

  const [state, dispatch] = useReducer<AppReducer>(reducer, {

  });

  const providerStore = useMemo(() => {
    // 项目内部不允许使用双下滑线命名开头的变量，这类变量只是为了方便在控制台查看
    window.__state = state;
    window.__routing = routing;

    return {
      state,
      routing,
      history,
      dispatch,
    }
  }, [state, routing, dispatch, history]);

  return (
    <Provider value={providerStore}>
      <ErrorBoundary>
        <App>
          <Suspense fallback={<div>加载中...</div>}>
            <Switch>
              {
                routes.map(({ path, component }, i) => (
                  <Route
                    exact
                    key={i}
                    path={path}
                    component={component}
                  />
                ))
              }
              <Route component={Error} />
            </Switch>
          </Suspense>
        </App>
      </ErrorBoundary>
    </Provider>
  );
}

export default Routers;
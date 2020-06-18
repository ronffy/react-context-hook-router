/**
 * @description 
 * @author ronffy
 * @Date 2020-06-04 17:53:23
 * @LastEditTime 2020-06-18 17:43:38
 * @LastEditors ronffy
 */
import { createContext, Dispatch } from 'react';
import { History, Location } from 'history';

export interface Action {
  type: string
  payload: any
}

export interface AppState {
  
}

interface Routing {
  location: Location
  params: {
    [propName: string]: string
  }
}

export interface AppContextProps  {
  state: AppState,
  dispatch: Dispatch<Action>
  history: History
  routing: Routing
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const AppContext = createContext({} as AppContextProps);

export const Provider = AppContext.Provider;

export const Consumer = AppContext.Consumer;

export default AppContext

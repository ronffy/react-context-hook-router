/**
 * @description 通用 redux 的 reducer
 * @author ronffy
 * @Date 2019-12-26 20:00:17
 * @LastEditTime 2020-01-06 17:38:06
 * @LastEditors ronffy
 */
import { Reducer } from "react";
import { AppState, Action } from "./AppContext";

export type AppReducer = Reducer<AppState, Action>;

const reducer: AppReducer = (state: AppState, { payload, type }: Action) => {
  switch (type) {
    case 'updateState':
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export default reducer

import { combineReducers } from "redux";
import { userReducer } from "./userReducer.ts";

const reducers = {
  user: userReducer
}

export const rootReducer = combineReducers(reducers)


export type RootState = ReturnType<typeof rootReducer> 
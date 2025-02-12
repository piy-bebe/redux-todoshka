import { combineReducers } from 'redux';
import { userReducer } from './userReducer.ts';
import { todoReducer } from './todoReducer.ts';

const reducers = {
  user: userReducer,
  todo: todoReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;

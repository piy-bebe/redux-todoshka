import * as UserActionCreators from './user.ts';
import * as TodoActionCreators from './todo.ts';

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
};

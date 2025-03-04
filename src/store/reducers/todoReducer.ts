import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo.ts';

const initState: TodoState = {
  todos: [],
  skip: 0,
  error: null,
  limit: 10,
  loading: false,
};

export const todoReducer = (state: TodoState = initState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, skip: action.payload };
    default:
      return state;
  }
};

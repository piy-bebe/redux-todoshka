import { Dispatch } from 'redux';
import axios from 'axios';
import { TodoAction, TodoActionTypes } from '../../types/todo.ts';

export const fetchTodos = (skip: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get('https://dummyjson.com/todos', {
        params: { skip: skip, limit: limit },
      });
      setTimeout(() => {
        dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data.todos });
      }, 500);
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел',
      });
    }
  };
};

export const setTodoPage = (skip: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: skip };
};

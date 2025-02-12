import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user.ts';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get('https://dummyjson.com/users');
      setTimeout(() => {
        dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data.users });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей ',
      });
    }
  };
};

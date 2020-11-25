import { types } from '../types/types';

/* 
  Auth Reducer
*/
export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        user: {
          email: action.email,
          password: action.password,
        },
      };
    case types.authLogout:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

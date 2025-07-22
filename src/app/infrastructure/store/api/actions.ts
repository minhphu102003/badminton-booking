import { Dispatch } from 'redux';
import { loginApi } from '../../api/rest/authApi';
import { User, LoginCredentials, AuthAction } from './types';

export const loginStart = (): AuthAction => ({
  type: 'LOGIN_START',
});

export const loginSuccess = (user: User): AuthAction => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error: string): AuthAction => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const loginUser = (credentials: LoginCredentials) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch(loginStart());
    try {
      const user = await loginApi(credentials);
      dispatch(loginSuccess(user));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      dispatch(loginFailure(errorMessage));
    }
  };
};

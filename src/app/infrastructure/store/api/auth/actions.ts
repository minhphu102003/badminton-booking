import { Dispatch } from 'redux';
import { authApiService } from '@/app/infrastructure/api/rest/authApi';
import { User, LoginCredentials, AuthAction, RegisterCredentials } from './types';

export const loginStart = (): AuthAction => ({
  type: 'LOGIN_REQUEST',
});

export const loginSuccess = (user: User): AuthAction => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error: string): AuthAction => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

type LoginCallbacks = {
  onSuccess?: (user: User) => void;
  onError?: (message: string) => void;
};

export const loginUser = (credentials: LoginCredentials, callbacks: LoginCallbacks = {}) => {
  return async (dispatch: Dispatch<AuthAction>): Promise<User | undefined> => {
    const { onSuccess, onError } = callbacks;

    dispatch({ type: 'LOGIN_REQUEST' });

    try {
      const user = await authApiService.login(credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      onSuccess?.(user);
      return user;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      const message = 'Login failed';
      dispatch({ type: 'LOGIN_FAILURE', payload: message });
      onError?.(message);
      return undefined;
    }
  };
};

export const registerStart = (): AuthAction => ({
  type: 'REGISTER_REQUEST',
});

export const registerSuccess = (user: User): AuthAction => ({
  type: 'REGISTER_SUCCESS',
  payload: user,
});

export const registerFailure = (error: string): AuthAction => ({
  type: 'REGISTER_FAILURE',
  payload: error,
});

type RegisterCallbacks = {
  onSuccess?: (user: User) => void;
  onError?: (message: string) => void;
};

export const registerUser = (
  credentials: RegisterCredentials,
  callbacks: RegisterCallbacks = {},
) => {
  return async (dispatch: Dispatch<AuthAction>): Promise<User | undefined> => {
    const { onSuccess, onError } = callbacks;
    dispatch(registerStart());

    try {
      const user = await authApiService.register(credentials);
      dispatch(registerSuccess(user));
      onSuccess?.(user);
      return user;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      const errorMessage = 'Register failed';
      dispatch(registerFailure(errorMessage));
      onError?.(errorMessage);
      return undefined;
    }
  };
};

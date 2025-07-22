export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginStartAction {
  type: 'LOGIN_START';
}

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: User;
}

export interface LoginFailureAction {
  type: 'LOGIN_FAILURE';
  payload: string;
}

export type AuthAction = LoginStartAction | LoginSuccessAction | LoginFailureAction;

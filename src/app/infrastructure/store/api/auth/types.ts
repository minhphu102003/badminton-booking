export interface User {
  id: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

export interface LoginStartAction {
  type: 'LOGIN_REQUEST';
}

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: User;
}

export interface LoginFailureAction {
  type: 'LOGIN_FAILURE';
  payload: string;
}

export interface RegisterStartAction {
  type: 'REGISTER_REQUEST';
}

export interface RegisterSuccessAction {
  type: 'REGISTER_SUCCESS';
  payload: User;
}

export interface RegisterFailureAction {
  type: 'REGISTER_FAILURE';
  payload: string;
}

export type AuthAction =
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailureAction
  | RegisterStartAction
  | RegisterSuccessAction
  | RegisterFailureAction;

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from './actionTypes';
import { AuthAction, User } from './types';

export interface AuthState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};

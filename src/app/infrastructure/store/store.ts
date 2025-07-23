import { createStore, applyMiddleware } from 'redux';
import { ThunkMiddleware, thunk } from 'redux-thunk';
import { AuthAction } from './api/auth/types';
import { BookingAction } from './api/booking/reducer';
import rootReducer, { RootState } from './rootReducer';

type AppActions = BookingAction | AuthAction;

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, AppActions>),
);

export type AppDispatch = typeof store.dispatch;

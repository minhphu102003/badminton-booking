import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { bookingReducer } from './booking/reducer';
import { notificationReducer } from './notification/reducers';

const rootReducer = combineReducers({
  booking: bookingReducer,
  auth: authReducer,
  notification: notificationReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

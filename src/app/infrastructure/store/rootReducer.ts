import { combineReducers } from 'redux';
import { authReducer } from './api/auth/reducer';
import { bookingReducer } from './api/booking/reducer';

const rootReducer = combineReducers({
  booking: bookingReducer,
  auth: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

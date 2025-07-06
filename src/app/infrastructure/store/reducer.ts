import { CourtsBooking } from '@entities/court-booking.entity';
import { SET_BOOKINGS } from './actionTypes';

type BookingState = {
  bookings: CourtsBooking[];
};

const initialState: BookingState = {
  bookings: [],
};

type BookingAction =
  | { type: typeof SET_BOOKINGS; payload: CourtsBooking[] }
  | { type: string; payload?: unknown };

export const bookingReducer = (
  state: BookingState = initialState,
  action: BookingAction,
): BookingState => {
  switch (action.type) {
    case SET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload as CourtsBooking[],
      };
    default:
      return state;
  }
};

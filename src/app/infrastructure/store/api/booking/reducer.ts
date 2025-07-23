import { CourtsBooking } from '@entities/court-booking.entity';
import { SET_BOOKINGS } from './actionTypes';

export interface BookingState {
  bookings: CourtsBooking[];
}

const initialState: BookingState = {
  bookings: [],
};

export type BookingAction = { type: typeof SET_BOOKINGS; payload: CourtsBooking[] };

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

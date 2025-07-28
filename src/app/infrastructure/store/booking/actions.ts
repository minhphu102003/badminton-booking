import { Dispatch } from 'redux';
import type { CourtsBooking } from '@entities/court-booking.entity';
import { SET_BOOKINGS } from './actionTypes';

export const setBookings = (bookings: CourtsBooking[]) => ({
  type: SET_BOOKINGS,
  payload: bookings,
});

export const fetchBookings = () => {
  return async (dispatch: Dispatch) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`);
    const data = await res.json();
    dispatch(setBookings(data));
  };
};

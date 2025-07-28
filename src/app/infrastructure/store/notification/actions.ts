import { Notification } from '@entities/notification';
import {
  ADD_NOTIFICATION,
  MARK_AS_READ,
  MARK_ALL_AS_READ,
  SET_NOTIFICATIONS,
  CLEAR_NOTIFICATIONS,
} from './actionTypes';

export const addNotification = (notification: Notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification,
});

export const markAsRead = (id: string) => ({
  type: MARK_AS_READ,
  payload: id,
});

export const markAllAsRead = () => ({
  type: MARK_ALL_AS_READ,
});

export const setNotifications = (notifications: Notification[]) => ({
  type: SET_NOTIFICATIONS,
  payload: notifications,
});

export const clearNotifications = () => ({
  type: CLEAR_NOTIFICATIONS,
});

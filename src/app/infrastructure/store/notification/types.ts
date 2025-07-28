import { Notification } from '@entities/notification';
import {
  ADD_NOTIFICATION,
  CLEAR_NOTIFICATIONS,
  MARK_ALL_AS_READ,
  MARK_AS_READ,
  SET_NOTIFICATIONS,
} from './actionTypes';

export interface NotificationState {
  items: Notification[];
  unreadCount: number;
}

export interface AddNotificationAction {
  type: typeof ADD_NOTIFICATION;
  payload: Notification;
}

export interface MarkAsReadAction {
  type: typeof MARK_AS_READ;
  payload: string;
}

export interface MarkAllAsReadAction {
  type: typeof MARK_ALL_AS_READ;
}

export interface SetNotificationsAction {
  type: typeof SET_NOTIFICATIONS;
  payload: Notification[];
}

export interface ClearNotificationsAction {
  type: typeof CLEAR_NOTIFICATIONS;
}

export type NotificationActionTypes =
  | AddNotificationAction
  | MarkAsReadAction
  | MarkAllAsReadAction
  | SetNotificationsAction
  | ClearNotificationsAction;

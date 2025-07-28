import {
  ADD_NOTIFICATION,
  MARK_AS_READ,
  MARK_ALL_AS_READ,
  SET_NOTIFICATIONS,
  CLEAR_NOTIFICATIONS,
} from './actionTypes';

import { NotificationState, NotificationActionTypes } from './types';

const initialState: NotificationState = {
  items: [],
  unreadCount: 0,
};

export const notificationReducer = (
  state = initialState,
  action: NotificationActionTypes,
): NotificationState => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) return state;

      return {
        ...state,
        items: [action.payload, ...state.items],
        unreadCount: state.unreadCount + (action.payload.isRead ? 0 : 1),
      };
    }

    case MARK_AS_READ: {
      const items = state.items.map((item) =>
        item.id === action.payload && !item.isRead ? { ...item, isRead: true } : item,
      );

      return {
        ...state,
        items,
        unreadCount: items.filter((n) => !n.isRead).length,
      };
    }

    case MARK_ALL_AS_READ: {
      const items = state.items.map((item) => ({ ...item, isRead: true }));
      return {
        ...state,
        items,
        unreadCount: 0,
      };
    }

    case SET_NOTIFICATIONS: {
      return {
        ...state,
        items: action.payload,
        unreadCount: action.payload.filter((n) => !n.isRead).length,
      };
    }

    case CLEAR_NOTIFICATIONS:
      return {
        ...state,
        items: [],
        unreadCount: 0,
      };

    default:
      return state;
  }
};

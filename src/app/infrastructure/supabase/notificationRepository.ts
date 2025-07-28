import { Notification } from '@entities/notification';
import { supabaseClient } from './supabaseClient';

export function subscribeToNotifications(
  userId: string,
  onInsert: (notification: Notification) => void,
) {
  const channel = supabaseClient
    .channel(`notifications:user:${userId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'notifications',
        filter: `user_id=eq.${userId}`,
      },
      (payload) => {
        const newNotification = payload.new as Notification;
        onInsert(newNotification);
      },
    )
    .subscribe();

  return () => {
    supabaseClient.removeChannel(channel);
  };
}

import { useEffect, useState } from 'react';
import { Notification } from '@entities/notification';
import { subscribeToNotifications } from '@infrastructure/supabase/notificationRepository';

export function useRealtimeNotification(userId: string) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const unsubscribe = subscribeToNotifications(userId, (notification) => {
      setNotifications((prev) => [notification, ...prev]);
      setHasUnread(true);
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  return {
    notifications,
    hasUnread,
    setHasUnread,
  };
}

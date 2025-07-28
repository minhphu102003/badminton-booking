export type NotificationType = 'GENERAL' | string;

export interface Notification {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  type: NotificationType;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  userId: string;
}

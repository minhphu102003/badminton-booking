'use client';

import Link from 'next/link';
import React from 'react';
import { Notification } from '@entities/notification';
import { formatTime } from '@shared/utils/format';

interface NotificationCardProps {
  notification: Notification;
}

export default function NotificationCard({ notification }: NotificationCardProps) {
  const { title, message, isRead, type, metadata, createdAt } = notification;

  return (
    <div
      className={`notification-card ${isRead ? 'notification-card--read' : 'notification-card--unread'} card mb-3`}
    >
      <div className="notification-card__header card-header d-flex justify-content-between align-items-center">
        <span className="notification-card__title fw-bold">{title}</span>
        <span className="notification-card__type badge bg-secondary text-uppercase">{type}</span>
      </div>

      <div className="notification-card__body card-body">
        <p className="notification-card__message mb-2">{message}</p>

        {typeof metadata?.url === 'string' && (
          <Link
            href={metadata.url as string}
            className="notification-card__link btn btn-sm btn-outline-primary"
          >
            Xem chi tiết
          </Link>
        )}
      </div>

      <div className="notification-card__footer card-footer d-flex justify-content-between align-items-center">
        <span className="notification-card__time text-muted small">{formatTime(createdAt)}</span>
        {!isRead && <span className="notification-card__dot bg-danger rounded-circle" />}
      </div>
    </div>
  );
}

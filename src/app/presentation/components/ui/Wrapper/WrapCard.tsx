import Link from 'next/link';
import { ReactNode } from 'react';
import './WrapCard.scss';

type WrapCardProps = {
  title: string;
  url: string;
  cardElement: ReactNode;
  isProfile?: boolean;
};

export default function WrapCard({ title, url, cardElement, isProfile = false }: WrapCardProps) {
  return (
    <div className="wrap-card">
      <div className="wrap-card__header d-flex align-items-center justify-content-between">
        <h3>{title}</h3>
        <Link href={url} className="wrap-card__link">
          {isProfile ? 'Edit' : 'See all'}
        </Link>
      </div>
      <div className="wrap-card__body">{cardElement}</div>
    </div>
  );
}

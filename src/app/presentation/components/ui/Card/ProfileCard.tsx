import './ProfileCard.scss';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRightIcon } from '@/app/presentation/icons';

type ProfileCardProps = {
  icon: ReactNode;
  title: string;
  paragraph: string;
  titleLink: string;
  url: string;
};

export default function ProfileCard({ icon, title, paragraph, titleLink, url }: ProfileCardProps) {
  return (
    <div className="profile-card d-flex align-items-start gap-2 p-2">
      <span className="profile-card__icon">{icon}</span>
      <div className="profile-card__content">
        <div>
          <h6 className="profile-card__title">{title}</h6>
          <p className="profile-card__description">{paragraph}</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex algin-items-center gap-1">
            <Link className="profile-card__link" href={url}>
              {titleLink}
            </Link>
            <ArrowRightIcon className="profile-card__link-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

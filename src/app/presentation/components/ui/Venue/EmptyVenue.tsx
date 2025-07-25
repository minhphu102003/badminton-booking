import './EmptyVenue.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function EmptyVenue() {
  return (
    <div className="empty-venue">
      <div className="empty-venue__content">
        <Image
          alt="Empty Venue"
          src="/imgs/empty-venue.jpg"
          height={100}
          width={100}
          className="empty-venue__image"
        />
        <h1 className="empty-venue__title">Can&apos;t Find Your Sport?</h1>
        <p className="empty-venue__text">
          No worries! We have plenty of other sports available. Click below to explore more.
        </p>
      </div>
      <Link href="/explore" className="empty-venue__link">
        Explore more sports
      </Link>
    </div>
  );
}

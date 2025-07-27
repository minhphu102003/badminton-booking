import './InformationDetail.scss';
import { GridIcon, CalendarIcon, EnvelopeIcon } from '@/app/presentation/icons';
import { ProfileCard, InvoiceCard } from '../Card';
import { WrapCard } from '../Wrapper';

type InformationDetailProps = {
  email: string;
};

export default function InformationDetail({ email }: InformationDetailProps) {
  return (
    <div className="information-detail">
      <WrapCard
        title="My Bookings"
        url="/bookings"
        cardElement={
          <ProfileCard
            icon={<CalendarIcon />}
            title="No booking made"
            paragraph="Dive into the world of sports and start booking your favorite venues."
            titleLink="Book Now"
            url="/explore/category"
          />
        }
      />
      <WrapCard title="My Invoices" url="/invoices" cardElement={<InvoiceCard spendAmount={0} />} />
      <WrapCard
        title="My Games"
        url="/games"
        cardElement={
          <ProfileCard
            icon={<GridIcon />}
            title="No games have been joined"
            paragraph="Join our social game and meet new friends. Let's get the fun rolling!"
            titleLink="How to join a game?"
            url="/explore/games"
          />
        }
      />
      <WrapCard
        title="My Contact"
        url="/profile"
        isProfile={true}
        cardElement={
          <div className="information-detail__contact">
            <h6 className="information-detail__contact-label">Email</h6>
            <div className="information-detail__contact-row d-flex align-items-center gap-1">
              <EnvelopeIcon className="information-detail__contact-icon" />
              <p className="information-detail__contact-email">{email}</p>
            </div>
          </div>
        }
      />
    </div>
  );
}

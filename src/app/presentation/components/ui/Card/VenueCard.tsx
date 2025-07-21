import './VenueCard.scss';
import Image from 'next/image';
import { EyeIcon } from '@presentation/icons';
import { Button } from '../Button';

type Props = {
  listSports: string[];
  venueName: string;
  location: string;
  imgUrl: string;
  onView?: () => void;
  onBook?: () => void;
};

export default function VenueCard({
  listSports,
  venueName,
  location,
  imgUrl,
  onView,
  onBook,
}: Props) {
  return (
    <div className="venue-card">
      <div className="venue-card__image-wrapper">
        <Image src={imgUrl} className="venue-card__img" alt={venueName} width={400} height={250} />
      </div>

      <div className="venue-card__content">
        <p className="venue-card__sports">{listSports.join(', ')}</p>
        <h3 className="venue-card__title">{venueName}</h3>
        <p className="venue-card__location">{location}</p>

        <div className="venue-card__actions">
          <Button
            variant="ghost"
            onClick={onView}
            className="venue-card__button venue-card__button--view d-flex align-items-center gap-2"
          >
            <EyeIcon />
            View
          </Button>
          <Button className="venue-card__button venue-card__button--book" onClick={onBook}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

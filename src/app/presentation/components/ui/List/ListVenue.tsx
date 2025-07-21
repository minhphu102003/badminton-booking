import { motion } from 'framer-motion';
import { Venue } from '../../../constants/sportVenue';
import { Button } from '../Button';
import { VenueCard } from '../Card';
import './ListVenue.scss';

type Props = {
  selectedSport: string;
  venuesBySport: Record<string, Venue[]>;
  onSeeMoreClick?: () => void;
  onView?: (id: number) => void;
  onBook?: (id: number) => void;
};

export default function SportVenueList({
  selectedSport,
  venuesBySport,
  onSeeMoreClick,
  onBook,
  onView,
}: Props) {
  const venues = venuesBySport[selectedSport] ?? [];

  return (
    <div className="d-flex flex-column align-items-center m-3">
      <motion.div
        key={selectedSport}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="venue-grid">
          {venues.map((venue) => (
            <div key={venue.id} className="venue-grid__item">
              <VenueCard
                venueName={venue.venueName}
                location={venue.location}
                listSports={venue.listSports}
                imgUrl={venue.imgUrl}
                onBook={() => onBook?.(venue.id)}
                onView={() => onView?.(venue.id)}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <Button
        variant="ghost"
        className="see-more-btn"
        onClick={onSeeMoreClick}
        disabled={venues.length < 8}
      >
        See more venues
      </Button>
    </div>
  );
}

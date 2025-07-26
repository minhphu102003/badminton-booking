import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Venue } from '../../../constants/sportVenue';
import { Button } from '../Button';
import { VenueCard } from '../Card';
import './ListVenue.scss';
import { EmptyVenue } from '../Venue';

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
  const allVenues = useMemo(() => {
    return venuesBySport[selectedSport] ?? [];
  }, [venuesBySport, selectedSport]);

  const [visibleVenues, setVisibleVenues] = useState<Venue[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 576;
    const slicedVenues = isMobile ? allVenues.slice(0, 2) : allVenues;
    setVisibleVenues(slicedVenues);
  }, [selectedSport, allVenues]);

  return (
    <div className="d-flex flex-column align-items-center m-3">
      {allVenues.length === 0 ? (
        <EmptyVenue />
      ) : (
        <>
          <motion.div
            key={selectedSport}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="venue-grid">
              {visibleVenues.map((venue) => (
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
            disabled={allVenues.length < 8}
          >
            See more venues
          </Button>
        </>
      )}
    </div>
  );
}

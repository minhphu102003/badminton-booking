'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { blogListData } from '../../constants/blogList';
import { SPORT_VENUE_LIST, SPORT_VENUES_BY_SPORT } from '../../constants/sportVenue';
import { SportList } from '../ui/List';
import { ListVenue } from '../ui/List';
import { ListBlog } from '../ui/List';

export default function Landing() {
  const [selectedSport, setSelectedSport] = useState('football');
  const router = useRouter();

  const handleView = (id: number) => {
    router.push(`/venues/${id}`);
  };

  const handleBook = (id: number) => {
    router.push(`/venues/${id}/book`);
  };

  return (
    <section className="container-custom">
      <h1 className="title title-lg">Featured Venues</h1>

      <SportList
        listSport={SPORT_VENUE_LIST}
        selectedSport={selectedSport}
        onSelectSport={setSelectedSport}
      />

      <ListVenue
        selectedSport={selectedSport}
        venuesBySport={SPORT_VENUES_BY_SPORT}
        onSeeMoreClick={() => console.log('See more clicked')}
        onView={handleView}
        onBook={handleBook}
      />

      <ListBlog data={blogListData} />
    </section>
  );
}

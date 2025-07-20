'use client';

import { useState } from 'react';
import { LOCATION_SUGGESTIONS } from '../../constants/locationSuggestions';
import { SEARCH_DEFAULTS } from '../../constants/searchDefaults';
import { SPORT_CATEGORIES } from '../../constants/sportCategories';
import { SportItem } from '../../constants/sports';
import { SearchForm } from '../ui/Form';

type Props = {
  onSearch: (data: { sport: string; location: string }) => void;
};

export default function SearchFormContainer({ onSearch }: Props) {
  const [sport] = useState('');
  const [location, setLocation] = useState('');
  const [selectedSport, setSelectedSport] = useState<SportItem | null>(null);

  const handleSearch = () => {
    onSearch({ sport, location });
  };

  return (
    <SearchForm
      texts={{
        sport: selectedSport ? selectedSport.title : SEARCH_DEFAULTS.SPORT,
        location: location || SEARCH_DEFAULTS.LOCATION,
      }}
      handlers={{
        onSearch: handleSearch,
      }}
      modal={{
        categories: [...SPORT_CATEGORIES],
        onSelect: setSelectedSport,
      }}
      setLocation={setLocation}
      onLocationSelect={setLocation}
      allLocationSuggestions={LOCATION_SUGGESTIONS}
    />
  );
}

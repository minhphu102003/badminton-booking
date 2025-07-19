'use client';

import { useRef, useState } from 'react';
import { useClickOutside } from '@/app/presentation/hooks/useClickOutside';
import { LOCATION_SUGGESTIONS } from '../../constants/locationSuggestions';
import { SPORT_CATEGORIES } from '../../constants/sportCategories';
import { SportItem } from '../../constants/sports';
import { SearchForm } from '../ui/Form';

type Props = {
  onSearch: (data: { sport: string; location: string; time: string }) => void;
};

export default function SearchFormContainer({ onSearch }: Props) {
  const [sport] = useState('');
  const [location, setLocation] = useState('');
  const [time] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [showLocationSuggest, setShowLocationSuggest] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedSport, setSelectedSport] = useState<SportItem | null>(null);

  const handleSearch = () => {
    onSearch({ sport, location, time });
  };

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    setShowLocationSuggest(false);
  };

  useClickOutside(modalRef, () => setOpenModal(false), openModal);

  return (
    <SearchForm
      texts={{
        sport: selectedSport ? selectedSport.title : 'Select a sport',
        location: location || '',
        time: time || 'Pick a date',
      }}
      handlers={{
        onSportClick: () => setOpenModal(!openModal),
        onLocationClick: () => setShowLocationSuggest(true),
        onTimeClick: () => alert('Open time picker'),
        onSearch: handleSearch,
      }}
      modal={{
        open: openModal,
        ref: modalRef,
        onClose: () => setOpenModal(false),
        categories: [...SPORT_CATEGORIES],
        onSelect: setSelectedSport,
      }}
      locationSuggestions={LOCATION_SUGGESTIONS}
      showLocationSuggest={showLocationSuggest}
      setLocation={setLocation}
      setShowLocationSuggest={setShowLocationSuggest}
      onLocationSelect={handleLocationSelect}
    />
  );
}

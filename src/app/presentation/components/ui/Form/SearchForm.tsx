'use client';

import './SearchForm.scss';
import { useRef, useState } from 'react';
import { SEARCH_DEFAULTS } from '@presentation/constants/searchDefaults';
import { SportCategory } from '@presentation/constants/sportCategories';
import { SportItem, SPORTS_DATA } from '@presentation/constants/sports';
import { useClickOutside } from '@presentation/hooks/useClickOutside';
import { Button } from '../Button';
import { DatePicker } from '../DatePicker';
import { SportCategoryModal } from '../Modal';
import { LocationSuggest } from '../Suggest';

type SearchFormTexts = {
  sport: string;
  location: string;
};

type SearchFormHandlers = {
  onSearch: () => void;
};

type SearchFormModal = {
  categories: SportCategory[];
  onSelect: (sport: SportItem | null) => void;
};

type Props = {
  texts: SearchFormTexts;
  handlers: SearchFormHandlers;
  modal: SearchFormModal;
  setLocation: (loc: string) => void;
  onLocationSelect: (loc: string) => void;
  allLocationSuggestions: string[];
};

export default function SearchFormUI({
  texts,
  handlers,
  modal,
  setLocation,
  onLocationSelect,
  allLocationSuggestions,
}: Props) {
  const { sport, location } = texts;
  const [time, setTime] = useState(SEARCH_DEFAULTS.TIME);
  const { onSearch } = handlers;
  const { categories, onSelect } = modal;
  const [showLocationSuggest, setShowLocationSuggest] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>(allLocationSuggestions);
  const [open, setOpen] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const locationSuggestRef = useRef<HTMLDivElement>(null);
  const datepickerRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => setOpen(false), open);
  useClickOutside(
    locationSuggestRef,
    () => {
      setShowLocationSuggest(false);
    },
    showLocationSuggest,
  );

  useClickOutside(datepickerRef, () => setOpenDatePicker(false), openDatePicker);

  return (
    <div className="search-form d-flex justify-content-between align-items-center gap-4 w-100 px-4">
      <div className="d-flex align-items-center gap-4">
        <div className="form-group">
          <Button
            variant="ghost"
            className="d-flex flex-column align-items-start gap-1 no-hover"
            onClick={() => setOpen(true)}
          >
            <span className="fw-high text-black">Sport</span>
            <span className="text-muted small">{sport}</span>
            {sport !== SEARCH_DEFAULTS.SPORT && (
              <span
                className="position-absolute top-50 end-0 text-black cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(null);
                }}
              >
                &times;
              </span>
            )}
          </Button>
        </div>

        {open && (
          <div ref={modalRef}>
            <SportCategoryModal
              onClose={() => setOpen(false)}
              categories={categories}
              sportsData={SPORTS_DATA}
              onSelectSport={onSelect}
            />
          </div>
        )}

        <div className="form-group position-relative d-flex flex-column align-items-start gap-1">
          <label className="fw-high text-black" htmlFor="location-input">
            Where
          </label>
          <div className="position-relative w-100">
            <input
              id="location-input"
              className="form-control form-control-sm text-muted no-outline pe-4"
              placeholder="Search venue name, city"
              value={location}
              onChange={(e) => {
                const newValue = e.target.value;
                setLocation(newValue);
                setShowLocationSuggest(true);

                const filtered = allLocationSuggestions.filter((item) =>
                  item.toLowerCase().includes(newValue.toLowerCase()),
                );
                setLocationSuggestions(filtered);
              }}
              onFocus={() => setShowLocationSuggest(true)}
            />
            {location !== SEARCH_DEFAULTS.LOCATION && (
              <span
                className="clear-icon position-absolute top-50 end-0 translate-middle-y me-2 text-black"
                onClick={() => {
                  setLocation(SEARCH_DEFAULTS.LOCATION);
                  setShowLocationSuggest(false);
                }}
              >
                &times;
              </span>
            )}
          </div>

          {showLocationSuggest && locationSuggestions.length > 0 && (
            <div ref={locationSuggestRef}>
              <LocationSuggest
                suggestions={locationSuggestions}
                onSelect={(loc) => {
                  onLocationSelect(loc);
                  setShowLocationSuggest(false);
                }}
              />
            </div>
          )}
        </div>

        <div className="form-group position-relative">
          <Button
            variant="ghost"
            className="d-flex flex-column align-items-start gap-1 no-hover"
            onClick={() => setOpenDatePicker(true)}
            disabled={sport === SEARCH_DEFAULTS.SPORT && location === SEARCH_DEFAULTS.LOCATION}
          >
            <span className="fw-high text-black">When</span>
            <span className="text-muted small">{time}</span>
          </Button>

          {openDatePicker && (
            <div ref={datepickerRef} className="datepicker-wrapper">
              <DatePicker onChange={(value: string) => setTime(value)} />
            </div>
          )}
        </div>
      </div>

      <Button onClick={onSearch} className="rounded-pill px-4 py-2">
        Search
      </Button>
    </div>
  );
}

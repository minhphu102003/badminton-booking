import './SearchForm.scss';
import { SportCategory } from '@presentation/constants/sportCategories';
import { SportItem, SPORTS_DATA } from '@presentation/constants/sports';
import { Button } from '../Button';
import { SportCategoryModal } from '../Modal';
import { LocationSuggest } from '../Suggest';

type SearchFormTexts = {
  sport: string;
  location: string;
  time: string;
};

type SearchFormHandlers = {
  onSportClick: () => void;
  onLocationClick: () => void;
  onTimeClick: () => void;
  onSearch: () => void;
};

type SearchFormModal = {
  open: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
  categories: SportCategory[];
  onSelect: (sport: SportItem | null) => void;
};

type Props = {
  texts: SearchFormTexts;
  handlers: SearchFormHandlers;
  modal: SearchFormModal;
  locationSuggestions: string[];
  showLocationSuggest: boolean;
  setLocation: (loc: string) => void;
  setShowLocationSuggest: (show: boolean) => void;
  onLocationSelect: (loc: string) => void;
};

export default function SearchFormUI({
  texts,
  handlers,
  modal,
  locationSuggestions,
  showLocationSuggest,
  setLocation,
  setShowLocationSuggest,
  onLocationSelect,
}: Props) {
  const { sport, location, time } = texts;
  const { onSportClick, onTimeClick, onSearch } = handlers;
  const { open, ref, onClose, categories, onSelect } = modal;

  return (
    <div className="search-form d-flex justify-content-between align-items-center gap-4 w-100 px-4">
      <div className="d-flex align-items-center gap-4">
        <div className="form-group">
          <Button
            variant="ghost"
            className="d-flex flex-column align-items-start gap-1 no-hover"
            onClick={onSportClick}
          >
            <span className="fw-high text-black">Sport</span>
            <span className="text-muted small">{sport}</span>
            {sport !== 'Select a sport' && (
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
          <div ref={ref}>
            <SportCategoryModal
              onClose={onClose}
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
          <input
            id="location-input"
            className="form-control form-control-sm text-muted"
            placeholder="Search venue name, city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => setShowLocationSuggest(true)}
          />
          {showLocationSuggest && locationSuggestions.length > 0 && (
            <LocationSuggest
              suggestions={locationSuggestions}
              onSelect={(loc) => {
                onLocationSelect(loc);
                setShowLocationSuggest(false);
              }}
            />
          )}
        </div>

        <div className="form-group">
          <Button
            variant="ghost"
            className="d-flex flex-column align-items-start gap-1 no-hover"
            onClick={onTimeClick}
          >
            <span className="fw-high text-black">When</span>
            <span className="text-muted small">{time}</span>
          </Button>
        </div>
      </div>

      <Button onClick={onSearch} className="rounded-pill px-4 py-2">
        Search
      </Button>
    </div>
  );
}

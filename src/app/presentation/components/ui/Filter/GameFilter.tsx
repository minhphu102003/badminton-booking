'use client';

import { useState } from 'react';
import { CloseIcon } from '@presentation/icons';
import { Button } from '../Button';
import './GameFilter.scss';

type GameFilterProps = {
  onClear: () => void;
  onFilter: () => void;
  listState: string[];
  listVenue: string[];
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function GameFilter({ onClear, onFilter, listState, listVenue }: GameFilterProps) {
  const [locationType, setLocationType] = useState<'venue' | 'state'>('venue');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('');

  const locationList = locationType === 'venue' ? listVenue : listState;

  return (
    <div className="game-filter">
      <div className="game-filter__header d-flex align-items-center justify-content-between">
        <h1>Filter</h1>
        <CloseIcon />
      </div>

      <div className="game-filter__content">
        <div className="game-filter__location">
          <h3>Location</h3>
          <div className="game-filter__toggle-buttons">
            <Button
              variant="ghost"
              onClick={() => setLocationType('venue')}
              className="game-filter__toggle-button"
            >
              Venue
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLocationType('state')}
              className="game-filter__toggle-button"
            >
              State
            </Button>
          </div>
          <div className="game-filter__location-dropdown mb-4">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="form-select"
            >
              <option value="">Select a {locationType}</option>
              {locationList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="game-filter__day">
          <h3>Day</h3>
          <div className="game-filter__day-buttons">
            {days.map((day) => (
              <Button
                key={day}
                variant="ghost"
                onClick={() => setSelectedDay(day)}
                className={`game-filter__day-button ${day === selectedDay ? 'active-day' : ''}`}
              >
                {day}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="game-filter__footer">
        <Button variant="ghost" onClick={onClear}>
          Clear
        </Button>
        <Button variant="ghost" onClick={onFilter}>
          Apply
        </Button>
      </div>
    </div>
  );
}

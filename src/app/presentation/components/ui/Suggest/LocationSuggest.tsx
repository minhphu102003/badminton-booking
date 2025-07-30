'use client';

import React from 'react';
import { GeoIcon } from '@presentation/icons';
import './LocationSuggest.scss';

type Props = {
  suggestions: string[];
  onSelect: (location: string) => void;
  isLocation?: boolean;
};

export default function LocationSuggest({ suggestions, onSelect, isLocation = true }: Props) {
  return (
    <div className="suggest-box border rounded shadow p-2 bg-white position-absolute z-3 w-100">
      {suggestions.map((location, index) => (
        <div
          key={index}
          className="suggest-item suggest-item-hoverable py-1 px-2 d-flex align-items-center gap-2 cursor-pointer"
          onClick={() => onSelect(location)}
        >
          {isLocation && <GeoIcon />}
          <span className="suggest-text text-black">{location}</span>
        </div>
      ))}
    </div>
  );
}

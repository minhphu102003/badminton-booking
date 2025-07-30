'use client';

import React, { useState } from 'react';
import { SearchIcon } from '@presentation/icons';
import { LocationSuggest } from '../Suggest';
import './SearchInput.scss';

type SearchInputProps = {
  suggestList: string[];
  searchText: string;
  onChange: (value: string) => void;
  placeholderSearch?: string;
  onSelectSuggestion?: (value: string) => void;
};

export default function SearchInput({
  suggestList,
  searchText,
  onChange,
  placeholderSearch = '',
  onSelectSuggestion,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(searchText);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestList.filter((s) =>
    s.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleSelect = (location: string) => {
    onSelectSuggestion?.(location);
    setInputValue(location);
    setShowSuggestions(false);
  };

  return (
    <div className="search-input position-relative">
      <div className="search-input__wrapper d-flex align-items-center justify-content-center">
        <SearchIcon className="search-input__icon" />
        <input
          className="search-input__field"
          type="text"
          placeholder={placeholderSearch}
          value={inputValue}
          onChange={(e) => {
            onChange(e.target.value);
            setInputValue(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 150);
          }}
          onFocus={() => {
            if (inputValue) setShowSuggestions(true);
          }}
        />
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <LocationSuggest suggestions={filteredSuggestions} onSelect={handleSelect} />
      )}
    </div>
  );
}

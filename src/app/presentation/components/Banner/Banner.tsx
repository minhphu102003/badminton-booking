'use client';
import { useState } from 'react';
import { BannerWithSearch } from '../ui/Banner';

export default function BannerSearchContainer() {
  const [keyword] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  return <BannerWithSearch onSearch={handleSearch} />;
}

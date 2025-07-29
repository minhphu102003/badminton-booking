'use client';

import { useState } from 'react';
import { SearchFormContainer } from '../../Form';
import { Button } from '../Button';
import './Banner.scss';

type BannerVariant = 'landing' | 'search' | 'explore' | 'deals';

type Props = {
  variant?: BannerVariant;
};

export default function BannerWithSearch({ variant = 'landing' }: Props) {
  const [keyword] = useState('');
  const [activeTab, setActiveTab] = useState<'sport' | 'games'>('sport');

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  return (
    <section className={`banner position-relative text-white mb-5 banner--${variant}`}>
      <div className="banner__overlay"></div>
      <div className="banner__content container text-center">
        <h1 className="banner__title">
          {variant === 'landing' && 'Get Active, Book Your Games Now'}
          {variant === 'explore' && 'Explore'}
          {variant === 'search' && 'Book to Play'}
          {variant === 'deals' && 'Deals'}
        </h1>
        {variant === 'landing' && (
          <p className="mb-8">
            From favorites like badminton and futsal to trendy pickleball and frisbee, play all
            kinds of sports nationwide!
          </p>
        )}
        {variant === 'explore' && (
          <div className="mb-4 d-flex justify-content-center gap-3">
            <Button
              variant="ghost"
              className={activeTab === 'sport' ? 'active' : ''}
              onClick={() => setActiveTab('sport')}
            >
              Sport
            </Button>
            <Button
              variant="ghost"
              className={activeTab === 'games' ? 'active' : ''}
              onClick={() => setActiveTab('games')}
            >
              Games
            </Button>
          </div>
        )}
        {variant !== 'deals' && (
          <div className="search-box d-flex justify-content-center">
            <SearchFormContainer onSearch={handleSearch} />
          </div>
        )}
      </div>
    </section>
  );
}

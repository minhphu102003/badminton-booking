'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { SearchFormContainer } from '../../Form';
import { Button } from '../Button';
import './Banner.scss';

type BannerVariant = 'landing' | 'search' | 'explore' | 'deals';
type TabType = 'sport' | 'games';

type Props = {
  variant?: BannerVariant;
};

export default function BannerWithSearch({ variant = 'landing' }: Props) {
  const [keyword] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('sport');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.includes('/games')) {
      setActiveTab('games');
    } else if (pathname.includes('/sport')) {
      setActiveTab('sport');
    }
  }, [pathname]);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    router.push(`/explore/${tab}`);
  };

  return (
    <section className={`banner banner--${variant} text-white mb-5`}>
      <div className="banner__overlay"></div>
      <div className="banner__content container text-center">
        <h1 className="banner__title">
          {variant === 'landing' && 'Get Active, Book Your Games Now'}
          {variant === 'explore' && 'Explore'}
          {variant === 'search' && 'Book to Play'}
          {variant === 'deals' && 'Deals'}
        </h1>

        {variant === 'landing' && (
          <p className="banner__subtitle">
            From favorites like badminton and futsal to trendy pickleball and frisbee, play all
            kinds of sports nationwide!
          </p>
        )}

        {variant === 'explore' && (
          <div className="banner__tabs">
            <Button
              variant="ghost"
              className={`banner__tab ${activeTab === 'sport' ? 'banner__tab--active' : ''}`}
              onClick={() => handleTabClick('sport')}
            >
              Sport
            </Button>
            <Button
              variant="ghost"
              className={`banner__tab ${activeTab === 'games' ? 'banner__tab--active' : ''}`}
              onClick={() => handleTabClick('games')}
            >
              Games
            </Button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {variant !== 'deals' && activeTab !== 'games' && (
            <motion.div
              key="search-box"
              className="banner__search-box"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <SearchFormContainer onSearch={handleSearch} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

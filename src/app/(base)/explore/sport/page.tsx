'use client';

import { useMemo, useState } from 'react';
import { SportCard } from '@/app/presentation/components/ui/Card';
import { SPORT_CATEGORIES, SportCategory } from '@/app/presentation/constants/sportCategories';
import { Button } from '@presentation/components/ui/Button';
import { SearchInput } from '@presentation/components/ui/Input';
import { SPORTS_DATA, SportItem } from '@presentation/constants/sports';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<SportCategory>('All');
  const [searchText, setSearchText] = useState('');

  const allCategories = SPORT_CATEGORIES.filter((c) => c !== 'All');

  const sportsData = useMemo(() => {
    if (searchText.trim()) {
      const lower = searchText.toLowerCase();
      return Object.entries(SPORTS_DATA).reduce<Record<SportCategory, SportItem[]>>(
        (acc, [category, sports]) => {
          const matched = sports.filter((s) => s.title.toLowerCase().includes(lower));
          if (matched.length > 0) acc[category as SportCategory] = matched;
          return acc;
        },
        {} as Record<SportCategory, SportItem[]>,
      );
    }
    return SPORTS_DATA;
  }, [searchText]);

  const suggestions = useMemo(() => {
    return Object.values(SPORTS_DATA)
      .flat()
      .map((sport) => sport.title);
  }, []);

  const handleSelectSuggestion = (text: string) => {
    setSearchText(text);
  };

  return (
    <div className="container-custom mb-5">
      <SearchInput
        searchText={searchText}
        onChange={(val) => setSearchText(val)}
        suggestList={suggestions}
        onSelectSuggestion={handleSelectSuggestion}
        placeholderSearch="Search category"
      />

      <div className="d-flex flex-wrap my-3">
        {SPORT_CATEGORIES.map((item) => (
          <Button
            key={item}
            variant="category"
            className={`mx-2 my-1 ${selectedCategory === item ? 'active' : ''}`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="d-flex flex-column gap-4 mt-3">
        {selectedCategory === 'All' ? (
          allCategories.map((category) => {
            const sports = sportsData[category] || [];
            if (sports.length === 0) return null;
            return (
              <div key={category}>
                <h5 className="fw-bold mb-3 text-start">{category} Sports</h5>
                <div className="d-flex flex-wrap gap-3">
                  {sports.map((sport) => (
                    <SportCard
                      key={sport.slug}
                      name={sport.title}
                      imageUrl={sport.image}
                      onClick={() => {
                        console.log('Selected:', sport);
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h5 className="fw-bold mb-3 text-start">{selectedCategory} Sports</h5>
            <div className="d-flex flex-wrap gap-3">
              {(sportsData[selectedCategory] || []).map((sport) => (
                <SportCard
                  key={sport.slug}
                  name={sport.title}
                  imageUrl={sport.image}
                  onClick={() => {
                    console.log('Selected:', sport);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

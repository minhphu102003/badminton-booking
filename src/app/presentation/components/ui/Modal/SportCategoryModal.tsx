import './SportCategoryModal.scss';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@/app/presentation/icons';
import { SportItem } from '@presentation/constants/sports';
import { Button } from '../Button';
import { SportCard } from '../Card';

type SportsDataMap = {
  [category: string]: SportItem[];
};

type Props = {
  onClose: () => void;
  categories: string[];
  sportsData: SportsDataMap;
  onSelectSport: (sport: SportItem) => void;
};

export default function SportCategoryModal({
  onClose,
  categories,
  sportsData,
  onSelectSport,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="modal show d-block custom-modal-overlay" tabIndex={-1} onClick={onClose}>
      <div
        className={`modal-dialog modal-dialog-centered modal-lg modal-grow ${animateIn ? 'show' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="m-2">
            <div className="d-flex align-items-center gap-3 item mx-2 border rounded px-4 py-1">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search sport category"
                className="border-0 no-focus"
              />
            </div>
          </div>
          <div className="scroll-wrapper">
            <div className="modal-body d-flex flex-column gap-3">
              <div className="d-flex flex-wrap">
                {categories.map((item, index) => (
                  <Button
                    key={index}
                    variant="category"
                    className={`mx-2 my-1 ${selectedCategory === item ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <div className="d-flex flex-column gap-4 mt-3">
                {selectedCategory === categories[0] ? (
                  categories
                    .filter((category) => category !== 'All')
                    .map((category) => (
                      <div key={category} className="ml-4">
                        <h5 className="fw-bold mb-3 text-start">{category + ' '} Sports </h5>
                        <div className="d-flex flex-wrap gap-3">
                          {(sportsData[category] || []).map((sport) => (
                            <SportCard
                              key={sport.slug}
                              name={sport.title}
                              imageUrl={sport.image}
                              onClick={() => {
                                onSelectSport(sport);
                                onClose();
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))
                ) : (
                  <div>
                    <h5 className="fw-bold mb-3 text-start">{selectedCategory + ' '} Sports</h5>
                    <div className="d-flex flex-wrap gap-3">
                      {(sportsData[selectedCategory] || []).map((sport) => (
                        <SportCard
                          key={sport.slug}
                          name={sport.title}
                          imageUrl={sport.image}
                          onClick={() => {
                            onSelectSport(sport);
                            onClose();
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

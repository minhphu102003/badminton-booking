import './SportCategoryModal.scss';
import { useState } from 'react';
import { SearchIcon } from '@/app/presentation/icons';
import { Button } from '../Button';

type Props = {
  onClose: () => void;
};

const categoryButtons: string[] = [
  'All',
  'Racquet',
  'Team',
  'Water',
  'Recreation',
  'Fitness',
  'EventSpaces',
  'Stay',
  'Classes',
  'Other',
];

export default function SportCategoryModal({}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3 item px-2 py-1 border rounded">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search sport category"
                className="border-0 no-focus"
              />
            </div>
            <div className="d-flex flex-wrap">
              {categoryButtons.map((item, index) => (
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
            <p>Modal body text goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

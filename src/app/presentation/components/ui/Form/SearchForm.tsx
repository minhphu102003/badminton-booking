'use client';

import './SearchForm.scss';
import { useRef, useState } from 'react';
import { useClickOutside } from '@/app/presentation/hooks/useClickOutside';
import { Button } from '../Button';
import { SportCategoryModal } from '../Modal';

type Props = {
  onSearch: (data: { sport: string; location: string; time: string }) => void;
};

export default function SearchForm({ onSearch }: Props) {
  const [sport] = useState('');
  const [location] = useState('');
  const [time] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    onSearch({ sport, location, time });
  };

  useClickOutside(modalRef, () => setOpenModal(false), openModal);

  return (
    <div className="search-form d-flex justify-content-between align-items-center gap-4 w-100 px-4">
      <div className="d-flex align-items-center gap-4 ">
        <div className="form-group">
          <Button
            variant="ghost"
            className="d-flex flex-column align-items-start gap-1 no-hover"
            onClick={() => setOpenModal(!openModal)}
          >
            <span className="fw-high text-black">Sport</span>
            <span className="text-muted small">Select a sport</span>
          </Button>
        </div>

        {openModal && (
          <div ref={modalRef}>
            <SportCategoryModal onClose={() => setOpenModal(false)} />
          </div>
        )}

        <div className="form-group">
          <Button
            variant="ghost"
            className="d-flex flex-column align-items-start gap-1 no-hover"
            onClick={() => alert('Open Sport Picker')}
          >
            <span className="fw-high text-black">Where</span>
            <input
              type="text"
              placeholder="Search venue name, city"
              className="border-0 placeholder-nowrap no-focus"
            />
          </Button>
        </div>

        <div className="form-group">
          <Button
            variant="ghost"
            className="d-flex flex-column align-items-start gap-1 no-hover"
            onClick={() => alert('Open Sport Picker')}
          >
            <span className="fw-high text-black">When</span>
            <span className="text-muted small">Pick a date</span>
          </Button>
        </div>
      </div>

      <Button onClick={handleSearch} className="rounded-pill px-4 py-2">
        Search
      </Button>
    </div>
  );
}

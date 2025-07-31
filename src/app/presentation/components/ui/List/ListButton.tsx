'use client';

import { useEffect, useRef, useState } from 'react';
import { SportVenueButton } from '@presentation/constants/sportVenue';
import { ChevronRightIcon, ChevronLeftIcon } from '@presentation/icons';
import { Button } from '../Button';
import './ListButton.scss';

type ListButtonProps = {
  listCategoryButton: SportVenueButton[];
  onClickCategoryButton: (id: string) => void;
};

export default function ListButton({ listCategoryButton, onClickCategoryButton }: ListButtonProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeId, setActiveId] = useState<string>('all');

  const checkScroll = () => {
    const list = listRef.current;
    if (!list) return;

    const { scrollLeft, scrollWidth, clientWidth } = list;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollLeftHandler = () => {
    listRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRightHandler = () => {
    listRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  const handleClick = (id: string) => {
    setActiveId(id);
    onClickCategoryButton(id);
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    checkScroll();
    list.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      list.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  useEffect(() => {
    checkScroll();
  }, [listCategoryButton]);

  return (
    <div className="list-button w-100">
      <Button
        className="list-button__arrow list-button__arrow--left"
        onClick={scrollLeftHandler}
        disabled={!canScrollLeft}
        variant="ghost"
      >
        <ChevronLeftIcon />
      </Button>

      <ul className="list-button__list w-100" ref={listRef}>
        {listCategoryButton.map((item, index) => (
          <li key={index} className="list-button__item">
            <Button
              variant="ghost"
              onClick={() => handleClick(item.id)}
              className={`list-button__button ${activeId === item.id ? 'list-button__button--active' : ''}`}
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ul>

      <Button
        className="list-button__arrow list-button__arrow--right"
        onClick={scrollRightHandler}
        variant="ghost"
        disabled={!canScrollRight}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

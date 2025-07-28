'use client';

import Image from 'next/image';
import { JSX, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@presentation/icons';
import { Button } from '../Button';
import './SportList.scss';

type SportItem = {
  id: number;
  label: string;
};

type Props = {
  listSport: SportItem[];
  selectedSport: string;
  onSelectSport: (sport: string) => void;
};
const sportIcons: Record<number, JSX.Element> = {
  1: <Image src="/icons/pickleball.png" alt="Pickleball" width={32} height={32} />,
  2: <Image src="/icons/badminton.png" alt="Badminton" width={32} height={32} />,
  3: <Image src="/icons/fustal.png" alt="Fustal" width={32} height={32} />,
  4: <Image src="/icons/volleyball.png" alt="Volleyball" width={32} height={32} />,
  5: <Image src="/icons/football.png" alt="Football" width={32} height={32} />,
  6: <Image src="/icons/tennis.png" alt="Tennis" width={32} height={32} />,
  7: <Image src="/icons/basketball.png" alt="Basketball" width={32} height={32} />,
  8: <Image src="/icons/field-hockey.png" alt="Field Hockey" width={32} height={32} />,
  9: <Image src="/icons/squash.png" alt="Squash" width={32} height={32} />,
  10: <Image src="/icons/netball.png" alt="Netball" width={32} height={32} />,
  11: <Image src="/icons/dodgeball.png" alt="Dodge Ball" width={32} height={32} />,
  12: <Image src="/icons/frisbee.png" alt="Frisbee" width={32} height={32} />,
  13: <Image src="/icons/other.png" alt="Other" width={32} height={32} />,
};

export default function VenueList({ listSport, selectedSport, onSelectSport }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollLeftActive, setScrollLeftActive] = useState(false);
  const [scrollRightActive, setScrollRightActive] = useState(true);

  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setScrollLeftActive(el.scrollLeft > 0);
    setScrollRightActive(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollBy = (offset: number) => {
    listRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const handleScroll = () => checkScroll();

    requestAnimationFrame(() => {
      checkScroll();
    });

    el.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className="venue-list-container">
      <Button
        className="controll-button"
        variant="ghost"
        onClick={() => scrollBy(-150)}
        disabled={!scrollLeftActive}
      >
        <ChevronLeftIcon />
      </Button>

      <ul className="venue-list-scroll" ref={listRef}>
        {listSport.map((sport) => (
          <li
            key={sport.id}
            className={`venue-item ${selectedSport === sport.label ? 'active' : ''}`}
            onClick={() => onSelectSport(sport.label)}
          >
            <span className="icon d-none d-lg-inline">{sportIcons[sport.id]}</span>
            <span className="label">{sport.label}</span>
          </li>
        ))}
      </ul>

      <Button
        className="controll-button"
        variant="ghost"
        onClick={() => scrollBy(150)}
        disabled={!scrollRightActive}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

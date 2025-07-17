'use client';
import './Dropdown.scss';
import { useEffect, useRef } from 'react';

type DropdownItem = {
  label: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

type Props = {
  label: React.ReactNode;
  items: DropdownItem[];
  buttonClassName?: string;
  menuClassName?: string;
  customClassName?: string;
};

export default function Dropdown({
  label,
  items,
  buttonClassName = '',
  menuClassName = '',
  customClassName = '',
}: Props) {
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuRef.current && buttonRef.current) {
      const menu = menuRef.current;
      const button = buttonRef.current;
      const longestItemWidth = Array.from(menu.children).reduce((max, item) => {
        const width = (item as HTMLElement).offsetWidth;
        return Math.max(max, width);
      }, 0);
      menu.style.minWidth = `${Math.max(button.offsetWidth, longestItemWidth)}px`;
    }
  }, [items]);

  return (
    <li className={`dropdown ${customClassName}`}>
      <button
        ref={buttonRef}
        className={`btn btn-outline-primary dropdown-toggle ${buttonClassName}`}
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul
        ref={menuRef}
        className={`dropdown-menu dropdown__menu ${menuClassName}`}
        aria-labelledby="dropdownMenuButton"
      >
        {items.map((item: DropdownItem, index: number) => (
          <li key={index} className={`dropdown__item`}>
            <button className={`dropdown-item ${item.className ?? ''}`} onClick={item.onClick}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}

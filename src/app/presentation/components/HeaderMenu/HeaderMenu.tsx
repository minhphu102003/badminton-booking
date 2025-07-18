import { ReactNode } from 'react';

export interface MenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface HeaderMenuProps {
  items: MenuItem[];
  renderItem: (item: MenuItem, index: number) => ReactNode;
  listClassName?: string;
  itemClassName?: string;
}

export default function HeaderMenu({
  items,
  renderItem,
  listClassName = '',
  itemClassName = '',
}: HeaderMenuProps) {
  return (
    <ul className={listClassName}>
      {items.map((item, index) => (
        <li key={index} className={itemClassName}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

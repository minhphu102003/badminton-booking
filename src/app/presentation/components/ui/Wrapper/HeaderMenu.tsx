'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PUBLIC_ROUTES } from '@shared/constants/routes';
import { HeaderMenu } from '../../HeaderMenu';
import { Button } from '../Button';
import './HeaderMenu.scss';

const menuItems = [
  { label: 'Explore', href: PUBLIC_ROUTES.SPORT },
  { label: 'Book', href: PUBLIC_ROUTES.BOOK },
  { label: 'Games', href: PUBLIC_ROUTES.GAMES },
  { label: 'Deals', href: PUBLIC_ROUTES.DEALS },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="d-flex align-items-center px-3">
      <HeaderMenu
        items={menuItems}
        listClassName="d-flex gap-3 list-unstyled m-0"
        itemClassName="d-flex align-items-center"
        renderItem={(item, index) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              href={item.href}
              key={index}
              className={`text-decoration-none ${isActive ? 'activeItem' : ''}`}
            >
              <Button variant="ghost">{item.label}</Button>
            </Link>
          );
        }}
      />
    </nav>
  );
}

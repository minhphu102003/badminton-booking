import Link from 'next/link';
import React from 'react';
import { LanguageDropdown } from '../LanguageDropdown';
import { Button } from '../ui/Button';
import './HeaderNav.scss';

type NavItem = {
  label: string;
  variant: 'ghost' | 'primary' | 'secondary';
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Help', variant: 'ghost', href: '/help' },
  { label: 'Sign Up', variant: 'ghost', href: '/register' },
  { label: 'Log In', variant: 'primary', href: '/login' },
];

export default function HeaderNav() {
  return (
    <ul className="d-flex align-items-center list-unstyled header__nav">
      <LanguageDropdown />
      {navItems.map((item, idx) => (
        <li key={idx}>
          <Link href={item.href}>
            <Button variant={item.variant}>{item.label}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

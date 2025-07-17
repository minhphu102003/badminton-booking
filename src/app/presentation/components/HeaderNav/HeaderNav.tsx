'use client';

import React from 'react';
import { LanguageDropdown } from '../LanguageDropdown';
import { Button } from '../ui/Button';
import './HeaderNav.scss';

type NavItem = {
  label: string;
  variant: 'ghost' | 'primary' | 'secondary';
  onClick?: () => void;
};

const navItems: NavItem[] = [
  { label: 'Help', variant: 'ghost', onClick: () => console.log('Help clicked') },
  { label: 'Sign Up', variant: 'ghost', onClick: () => console.log('Sign Up clicked') },
  { label: 'Log In', variant: 'primary', onClick: () => console.log('Log In clicked') },
];

export default function HeaderNav() {
  return (
    <ul className="d-flex align-items-center list-unstyled header__nav">
      <LanguageDropdown />
      {navItems.map((item, idx) => (
        <li key={idx}>
          <Button variant={item.variant} onClick={item.onClick}>
            {item.label}
          </Button>
        </li>
      ))}
    </ul>
  );
}

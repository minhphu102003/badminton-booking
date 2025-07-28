'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { User } from '@/app/infrastructure/store/auth/types';
import { useClickOutside } from '@presentation/hooks/useClickOutside';
import { PencilIcon } from '@presentation/icons';
import { LanguageDropdown } from '../../LanguageDropdown';
import { Button } from '../Button';
import './HeaderNav.scss';

type HeaderNavProps = {
  user?: User | null;
};

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

export default function HeaderNav({ user }: HeaderNavProps) {
  const menuRef = useRef<HTMLLIElement>(null);
  const [open, setOpen] = useState(false);

  useClickOutside(menuRef, () => setOpen(false));

  const handleLogout = () => {
    // TODO: logout logic
    console.log('Logging out...');
  };

  return (
    <ul className="d-flex align-items-center list-unstyled header__nav">
      <LanguageDropdown />
      {user ? (
        <li className="header__nav-item" ref={menuRef}>
          <button onClick={() => setOpen(!open)} className="header__nav-toggle">
            <Image
              src={user?.avatar || '/imgs/default-avatar.jpg'}
              alt="User Avatar"
              width={36}
              height={36}
              className="user-avatar"
            />
          </button>
          {open && (
            <div className="header__dropdown dropdown-menu show">
              <button
                onClick={() => setOpen(false)}
                className="btn-close header__dropdown-close"
                aria-label="Close"
              />
              <div className="header__dropdown-avatar-wrapper">
                <div className="header__dropdown-avatar-box">
                  <Image
                    src={user?.avatar || '/imgs/default-avatar.jpg'}
                    alt="User Avatar"
                    width={72}
                    height={72}
                    className="rounded-circle border border-gray"
                  />
                  <Link href="/profile/edit" className="header__dropdown-edit-icon">
                    <PencilIcon />
                  </Link>
                </div>
              </div>
              <Link href="/profile" className="dropdown-item">
                View Profile
              </Link>
              <Link href="/user/notification" className="dropdown-item">
                Notification
              </Link>
              <button onClick={handleLogout} className="dropdown-item">
                Logout
              </button>
            </div>
          )}
        </li>
      ) : (
        <>
          {navItems
            .filter((item) => item.label !== 'Log In')
            .map((item, idx) => (
              <li key={idx} className="hide-on-mobile">
                <Link href={item.href}>
                  <Button variant={item.variant}>{item.label}</Button>
                </Link>
              </li>
            ))}

          {navItems
            .filter((item) => item.label === 'Log In')
            .map((item, idx) => (
              <li key={`login-${idx}`}>
                <Link href={item.href}>
                  <Button variant={item.variant}>{item.label}</Button>
                </Link>
              </li>
            ))}
        </>
      )}
    </ul>
  );
}

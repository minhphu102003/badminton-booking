'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { User } from '@infrastructure/store/auth/types';
import { useClickOutside } from '@presentation/hooks/useClickOutside';
import { useLogout } from '@presentation/hooks/useLogout';
import { PencilIcon } from '@presentation/icons';
import { PUBLIC_ROUTES } from '@shared/constants/routes';
import { LanguageDropdown } from '../../LanguageDropdown';
import { Button } from '../Button';
import './HeaderNav.scss';

type HeaderNavProps = {
  user?: User | null;
  showSuccess?: (msg: string) => void;
  showError?: (msg: string) => void;
};

type NavItem = {
  label: string;
  variant: 'ghost' | 'primary' | 'secondary';
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Help', variant: 'ghost', href: PUBLIC_ROUTES.HELP },
  { label: 'Sign Up', variant: 'ghost', href: PUBLIC_ROUTES.REGISTER },
  { label: 'Log In', variant: 'primary', href: PUBLIC_ROUTES.LOGIN },
];

export default function HeaderNav({ user, showSuccess, showError }: HeaderNavProps) {
  const menuRef = useRef<HTMLLIElement>(null);
  const [open, setOpen] = useState(false);
  const { logout, loading } = useLogout();

  useClickOutside(menuRef, () => setOpen(false));

  const handleLogout = async () => {
    try {
      await logout();
      showSuccess?.('Successfully logged out!');
    } catch (error) {
      console.log(error);
      showError?.('Logout failed. Please try again!');
    }
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
              <Link href="/user" className="dropdown-item">
                View Profile
              </Link>
              <Link href="/user/notification" className="dropdown-item">
                Notification
              </Link>
              <Button
                onClick={handleLogout}
                variant="ghost"
                disabled={loading}
                className="dropdown-item"
              >
                Logout
              </Button>
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

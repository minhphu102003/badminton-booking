'use client';

import './header.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { User } from '@/app/infrastructure/store/auth/types';
import { localStorageService } from '@infrastructure/browser/localStorage';
import { RootState } from '@infrastructure/store/rootReducer';
import { showError, showSuccess } from '@infrastructure/ui/toast';
import { HeaderNav } from '../ui/HeaderNav';
import { HeaderLogo } from '../ui/Logo';
import { HeaderMenu } from '../ui/Wrapper';

type HeaderProps = {
  isAuth?: boolean;
};

export default function Header({ isAuth = false }: HeaderProps) {
  const reduxUser = useSelector((state: RootState) => state.auth.user);
  const [user, setUser] = useState<User | null>(reduxUser);

  useEffect(() => {
    if (!reduxUser) {
      const storedUser = localStorageService.getObject<User>('auth_user');
      if (storedUser) {
        setUser(storedUser);
      }
      return;
    }
    setUser(reduxUser);
  }, [reduxUser]);

  return (
    <header>
      <div className="header">
        <div className="header__inner container">
          <div className="d-flex justify-content-between align-items-center">
            <HeaderLogo
              src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg"
              href="/"
            />
            <HeaderNav user={user} showError={showError} showSuccess={showSuccess} />
          </div>
        </div>
      </div>
      {!isAuth && (
        <div className="wrapper__headerMenu">
          <HeaderMenu />
        </div>
      )}
    </header>
  );
}

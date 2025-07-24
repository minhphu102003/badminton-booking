'use client';

import './header.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { localStorageService } from '@infrastructure/browser/localStorage';
import { User } from '@infrastructure/store/api/auth/types';
import { RootState } from '@infrastructure/store/rootReducer';
import { HeaderNav } from '../ui/HeaderNav';
import { HeaderLogo } from '../ui/Logo';
import { HeaderMenu } from '../ui/Wrapper';

export default function Header() {
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
            <HeaderNav user={user} />
          </div>
        </div>
      </div>
      <div className="wrapper__headerMenu">
        <HeaderMenu />
      </div>
    </header>
  );
}

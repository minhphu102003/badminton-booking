'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { localStorageService } from "@/app/infrastructure/browser/localStorage";
import { User } from '@/app/infrastructure/store/api/auth/types';
import { RootState } from '@/app/infrastructure/store/rootReducer';
import { UserInformation, InformationDetail } from '@presentation/components/ui/User';

export default function HomePage() {
  const reduxUser = useSelector((state: RootState) => state.auth.user);
  const [imgUrl, setImgUrl] = useState<string>('/imgs/default-avatar.jpg');
  const [user, setUser] = useState<User | null>(null);
  // TODO: Call api for get detail user information

  useEffect(() => {
    if (reduxUser) {
      setImgUrl(reduxUser?.avatar || '/imgs/default-avatar.jpg');
      setUser(reduxUser);
      return;
    }

    const storedUser = {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '/imgs/default-avatar.jpg',
      dateJoin: '2025-07-01T10:00:00.000Z',
      id: '',
      accessToken: '',
      refreshToken: '',
    };

    // const storedUser = localStorageService.getObject<User>('auth_user');
    if (storedUser) {
      if (storedUser.avatar) setImgUrl(storedUser.avatar);
      setUser(storedUser);
    }
  }, [reduxUser]);

  const handleEdit = () => {
    // TODO : handle in later
    console.log('edit');
  };

  return (
    <>
      <UserInformation
        user={{
          email: user?.email,
          imgUrl: imgUrl,
          userName: user?.name,
          timeJoin: '2025-07-01T10:00:00.000Z',
        }}
        onEdit={handleEdit}
      />
      <InformationDetail email={user?.email || ''} />
    </>
  );
}

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authApiService } from '@infrastructure/api/rest/authApi';
import { localStorageService } from '@infrastructure/browser/localStorage';
import { LOGOUT } from '@infrastructure/store/auth/actionTypes';

export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await authApiService.logout();
      dispatch({ type: LOGOUT });
      localStorageService.removeObject('auth_user');

      if (pathname !== '/') {
        router.push('/');
      } else {
        window.location.reload();
      }
    } catch (e) {
      console.error('Error logging out', e);
    } finally {
      setLoading(false);
    }
  };

  return { logout: handleLogout, loading };
};

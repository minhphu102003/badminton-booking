'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/app/infrastructure/store/auth/actions';
import { showSuccess, showError } from '@/app/infrastructure/ui/toast';
import { LoginInput } from '@domain/validation/loginSchema';
import { localStorageService } from '@infrastructure/browser/localStorage';
import { AppDispatch } from '@infrastructure/store/store';
import { LoginForm } from '@presentation/components/ui/Form';

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogin = async (data: LoginInput) => {
    await dispatch(
      loginUser(data, {
        onSuccess: (user) => {
          localStorageService.setObject('auth_user', user);
          showSuccess(`Welcome ${user.name}!`);
          router.push('/');
        },
        onError: (msg) => {
          showError(msg);
        },
      }),
    );
  };

  const handleLoginWithFacebook = () => {
    // TODO : handle later
    console.log('Login with Facebook');
  };

  const handleLoginWithGoogle = () => {
    // TODO : handle later
    console.log('Login with Google');
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      onLoginWithFacebook={handleLoginWithFacebook}
      onLoginWithGoogle={handleLoginWithGoogle}
    />
  );
}

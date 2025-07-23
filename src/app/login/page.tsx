'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { showSuccess, showError } from '@/app/infrastructure/ui/toast';
import { LoginInput } from '@domain/validation/loginSchema';
import { loginUser } from '@infrastructure/store/api/auth/actions';
import { LoginForm } from '@presentation/components/ui/Form';
import { AppDispatch } from '../infrastructure/store/store';

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogin = async (data: LoginInput) => {
    await dispatch(
      loginUser(data, {
        onSuccess: (user) => {
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

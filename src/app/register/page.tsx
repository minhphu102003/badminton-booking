'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { RegisterInput } from '@domain/validation/registerSchema';
import { registerUser } from '@infrastructure/store/api/auth/actions';
import { AppDispatch } from '@infrastructure/store/store';
import { showError, showSuccess } from '@infrastructure/ui/toast';
import { RegisterForm } from '@presentation/components/ui/Form';

export default function SignUpPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleRegister = async (data: RegisterInput) => {
    await dispatch(
      registerUser(data, {
        onSuccess: () => {
          showSuccess('Register successful!');
          router.push('/login');
        },
        onError: (error) => {
          showError(error);
        },
      }),
    );
  };

  const handleRegisterWithFacebook = () => {
    // TODO : handle later
    console.log('Register with Facebook');
  };

  const handleRegisterWithGoogle = () => {
    // TODO : handle later
    console.log('Register with Google');
  };

  return (
    <RegisterForm
      onSubmit={handleRegister}
      onRegisterWithFacebook={handleRegisterWithFacebook}
      onRegisterWithGoogle={handleRegisterWithGoogle}
    />
  );
}

'use client';

import { RegisterInput } from '@domain/validation/registerSchema';
import RegisterForm from '@presentation/components/ui/Form/RegisterForm';

export default function SignUpPage() {
  const handleRegister = async (data: RegisterInput) => {
    console.log('Register data:', data);
  };

  const handleRegisterWithFacebook = () => {
    console.log('Register with Facebook');
  };

  const handleRegisterWithGoogle = () => {
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

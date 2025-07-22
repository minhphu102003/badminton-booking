'use client';

import { LoginInput } from '@domain/validation/loginSchema';
import { LoginForm } from '@presentation/components/ui/Form';

export default function LoginPage() {
  const handleLogin = async (data: LoginInput) => {
    console.log('Login data:', data);
  };

  const handleLoginWithFacebook = () => {
    console.log('Login with Facebook');
  };

  const handleLoginWithGoogle = () => {
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

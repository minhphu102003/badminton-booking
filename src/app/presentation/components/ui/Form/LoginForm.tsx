'use client';

import Link from 'next/link';
import { LoginInput } from '@domain/validation/loginSchema';
import { useLoginForm } from '@presentation/hooks/useLoginForm';
import { Button } from '../Button';
import TextInput from '../Input/TextInput';
import './LoginForm.scss';

type LoginFormProps = {
  onSubmit: (data: LoginInput) => void;
  onLoginWithFacebook?: () => void;
  onLoginWithGoogle?: () => void;
};

export default function LoginForm({
  onSubmit,
  onLoginWithFacebook,
  onLoginWithGoogle,
}: LoginFormProps) {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="form-container d-flex flex-column gap-5">
      <div className="form-header">
        <h2 className="title title-lg">Log In</h2>
        <p>
          Don&apos;t have a Badminton account yet?{' '}
          <Link href="/register" className="link-primary fw-semibold">
            Sign Up
          </Link>
        </p>
      </div>

      <div className="form-content d-flex flex-column">
        <TextInput label="Email" register={register('email')} error={errors.email} />
        <div className="d-flex flex-column gap-1 mb-5">
          <TextInput
            label="Password"
            isPassword
            register={register('password')}
            error={errors.password}
          />
          <div className="d-flex justify-content-end">
            <Link href="/forgot-password" className="text-decoration-none">
              Forgot password
            </Link>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <Button className="form-submit-button w-100" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </Button>
          <p className="form-button__description text-center">
            By logging in, I agree to the Badminton{' '}
            <Link href="/term" className="text-decoration-none">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-decoration-none">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="form-footer d-flex flex-column gap-3">
        <div className="separator">
          <span>or</span>
        </div>
        <Button variant="ghost" className="btn-oauth" onClick={onLoginWithFacebook}>
          Continue with Facebook
        </Button>
        <Button variant="ghost" className="btn-oauth" onClick={onLoginWithGoogle}>
          Continue with Google
        </Button>
      </div>
    </form>
  );
}

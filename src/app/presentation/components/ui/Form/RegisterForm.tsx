'use client';

import Link from 'next/link';
import { RegisterInput } from '@domain/validation/registerSchema';
import { useRegisterForm } from '@presentation/hooks/useRegisterForm';
import { Button } from '../Button';
import TextInput from '../Input/TextInput';
import './RegisterForm.scss';

type RegisterFormProps = {
  onSubmit: (data: RegisterInput) => void;
  onRegisterWithFacebook?: () => void;
  onRegisterWithGoogle?: () => void;
};

export default function RegisterForm({
  onSubmit,
  onRegisterWithFacebook,
  onRegisterWithGoogle,
}: RegisterFormProps) {
  const { register, handleSubmit, errors, isSubmitting } = useRegisterForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="form-container d-flex flex-column gap-5">
      <div className="form-header">
        <h2 className="title title-lg">Sign Up</h2>
        <p>
          Already have a Badminton account?{' '}
          <Link href="/login" className="link-primary fw-semibold">
            Log In
          </Link>
        </p>
      </div>

      <div className="form-content d-flex flex-column">
        <TextInput label="Full Name" register={register('name')} error={errors.name} />
        <TextInput label="Email" register={register('email')} error={errors.email} />
        <TextInput
          label="Password"
          isPassword
          register={register('password')}
          error={errors.password}
        />
        <TextInput
          label="Confirm Password"
          isPassword
          register={register('repassword')}
          error={errors.repassword}
        />

        <div className="d-flex flex-column align-items-center mt-4">
          <Button className="form-submit-button w-100" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </Button>
          <p className="form-button__description text-center">
            By signing up, I agree to the Badminton{' '}
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
        <Button variant="ghost" className="btn-oauth" onClick={onRegisterWithFacebook}>
          Continue with Facebook
        </Button>
        <Button variant="ghost" className="btn-oauth" onClick={onRegisterWithGoogle}>
          Continue with Google
        </Button>
      </div>
    </form>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Badminton Booking',
  description: 'Sign up to access your account.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="register-layout">
      <main>{children}</main>
    </div>
  );
}

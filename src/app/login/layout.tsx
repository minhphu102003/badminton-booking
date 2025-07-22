import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Badminton Booking',
  description: 'Sign in to access your account.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="login-layout">
      <main>{children}</main>
    </div>
  );
}

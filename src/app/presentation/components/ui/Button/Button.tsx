import 'react';
import './Button.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost' | 'category';
  disabled?: boolean;
};

export default function Button({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-custom btn-custom-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

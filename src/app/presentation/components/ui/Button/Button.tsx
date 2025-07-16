import 'react';
import './Button.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
};

export default function Button({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
}

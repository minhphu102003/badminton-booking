import React from 'react';

type SpinnerProps = {
  content?: string;
  size?: 'sm' | 'md' | 'lg';
};

const Spinner: React.FC<SpinnerProps> = ({ content = 'Loading...', size = 'md' }) => {
  const sizeClass =
    size === 'sm'
      ? 'spinner-border spinner-border-sm'
      : size === 'lg'
        ? 'spinner-border'
        : 'spinner-border';

  const sizeStyle =
    size === 'lg'
      ? { width: '3rem', height: '3rem' }
      : size === 'sm'
        ? { width: '1rem', height: '1rem' }
        : { width: '2rem', height: '2rem' };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className={`${sizeClass} text-primary mb-3`} role="status" style={sizeStyle}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted">{content}</p>
    </div>
  );
};

export default Spinner;

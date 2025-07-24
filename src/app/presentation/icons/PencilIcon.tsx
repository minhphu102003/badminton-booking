import React from 'react';

type PencilIconProps = React.HTMLAttributes<HTMLSpanElement>;

export default function PencilIcon(props: PencilIconProps) {
  return (
    <span {...props}>
      <i className="bi bi-pencil" />
    </span>
  );
}

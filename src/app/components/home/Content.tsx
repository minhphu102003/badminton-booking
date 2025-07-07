'use client';

import { useEffect, useState } from 'react';

export default function Content() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Dữ liệu được lấy sau khi render client (CSR)');
  }, []);

  return (
    <section>
      <p>{message}</p>
    </section>
  );
}

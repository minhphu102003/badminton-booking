'use client';

import { useEffect } from 'react';

export default function BootstrapLoader() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return null;
}

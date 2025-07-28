'use client';

import { useEffect, useState } from 'react';
import { languageService } from '@/app/application/language/languageService';
import GlobeIcon from '../../icons/GlobeIcon';
import ClientBootstrapLoader from '../ui/ClientBootstrapLoader';
import { Dropdown } from '../ui/DropDown';

export default function LanguageDropdown() {
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    setCurrentLang(languageService.getLanguage().toUpperCase());
  }, []);

  const items = [
    {
      label: 'EN',
      onClick: () => languageService.setLanguage('en'),
    },
    {
      label: 'VN',
      onClick: () => languageService.setLanguage('vn'),
    },
  ];

  return (
    <>
      <ClientBootstrapLoader />
      <Dropdown
        label={
          <>
            <GlobeIcon /> {currentLang}
          </>
        }
        items={items}
      />
    </>
  );
}

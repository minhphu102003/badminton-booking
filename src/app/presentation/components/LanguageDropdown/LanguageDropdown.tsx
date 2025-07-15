'use client';

import { useEffect, useState } from 'react';
// import style from './languageDropdown.module.scss';
import { languageService } from '@/app/application/language/services/languageService';
import GlobeIcon from '../../icons/GlobeIcon';
import ClientBootstrapLoader from '../ui/ClientBootstrapLoader';
import { Dropdown } from '../ui/Dropdown';

export default function LanguageDropdown() {
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    setCurrentLang(languageService.getLanguage());
  }, []);

  return (
    <>
      <ClientBootstrapLoader />
      <Dropdown
        label={
          <>
            <GlobeIcon /> {currentLang}
          </>
        }
      >
        <li>
          <button className="dropdown-item" onClick={() => languageService.setLanguage('en')}>
            English
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => languageService.setLanguage('vn')}>
            Vietnamese
          </button>
        </li>
      </Dropdown>
    </>
  );
}

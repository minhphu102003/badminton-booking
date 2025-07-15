'use client';

import { useEffect, useState } from 'react';
import ClientBootstrapLoader from '../../presentation/components/ui/ClientBootstrapLoader';

export default function LanguageDropdown() {
  const [currentLang, setCurrentLang] = useState('EN');

  const changeLanguage = (lang: 'en' | 'vn') => {
    localStorage.setItem('lang', lang);
    window.location.reload();
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      setCurrentLang(storedLang.toUpperCase());
    }
  }, []);

  return (
    <>
      <ClientBootstrapLoader />
      <li className="language-dropdown nav-item dropdown">
        <button
          className="language-dropdown__button btn btn-outline-primary dropdown-toggle"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="language-dropdown__icon bi bi-globe"></i> {currentLang}
        </button>
        <ul className="dropdown-menu language-dropdown__menu" aria-labelledby="languageDropdown">
          <li>
            <button
              className="language-dropdown__item dropdown-item"
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
          </li>
          <li>
            <button
              className="language-dropdown__item dropdown-item"
              onClick={() => changeLanguage('vn')}
            >
              Vietnamese
            </button>
          </li>
        </ul>
      </li>
    </>
  );
}

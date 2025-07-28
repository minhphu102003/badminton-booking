import { localStorageService } from '@infrastructure/browser/localStorage';

const LANG_KEY = 'lang';

export const languageService = {
  getLanguage: (): string => {
    return languageService.getStoredLanguage()?.toUpperCase() ?? 'EN';
  },

  getStoredLanguage: (): string | null => {
    return localStorageService.get(LANG_KEY);
  },

  setLanguage: (lang: 'en' | 'vn') => {
    localStorageService.set(LANG_KEY, lang);
    window.location.reload();
  },
};

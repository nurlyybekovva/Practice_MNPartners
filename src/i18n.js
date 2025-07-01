import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en';
import ruTranslation from './locales/ru';
import kzTranslation from './locales/kz';

const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  kz: { translation: kzTranslation }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    }
  });

export default i18n;
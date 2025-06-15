import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './translations/en.json';
import npTranslation from './translations/np.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslation,
      np: npTranslation
    },
    lng: 'np', // default language is Nepali
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    // Force Nepali as default language if not explicitly set
    load: 'languageOnly',
    initImmediate: false
  });

export default i18n;

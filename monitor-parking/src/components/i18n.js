import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//language imports
import cz from '../locales/cz';
import en from '../locales/en';
import es from '../locales/es';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'cz',
        interpolation: {
        escapeValue: false,
        },
        resources: {
            cz,
            en,
            es,
        }
    });

export default i18n;
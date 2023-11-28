import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getItem } from '../utility/localStorageControl';

i18n.use(initReactI18next).init({
  fallbackLng: 'vi',
  lng: getItem('lang') || 'vi',
  resources: {
    en: {
      translations: require('./localization/en/translation.json'),
    },
    vi: {
      translations: require('./localization/vi/translation.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en', 'vi'];

export default i18n;

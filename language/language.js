import I18n from 'react-native-i18n';
import en from './en';
import zh from './zh';

I18n.fallbacks = false;

I18n.defaultLocale = "zh";
I18n.locale = "zh";
I18n.currentLocale();
 
I18n.translations = {
  zh,
  en,
};
 
export default I18n;

import { useTranslations } from 'next-intl';
import { LOCALE_KEYS } from '@/constants/localizationKeys';

export const useLocalization = () => {
  const t = useTranslations();

 
  const translate = (key, values = {}) => {
    return t(key, values);
  };

  return {
    t: translate,
    keys: LOCALE_KEYS,
  };
};

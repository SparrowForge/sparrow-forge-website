import { LOCALE_KEYS } from '@/constants/localizationKeys';
import { useLocalization } from '@/hooks/useLocalization';

export default function HomePage() {
  const { t } = useLocalization();

  return (
    <div>
      <h1>{t(LOCALE_KEYS.WELCOME)}</h1>
      <p>{t(LOCALE_KEYS.LANGUAGE)}</p>
    </div>
  );
}

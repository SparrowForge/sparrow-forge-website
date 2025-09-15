import { LOCALE_KEYS } from '@/constants/localizationKeys';
import { useLocalization } from '@/hooks/useLocalization';
import LanguageButton from './shared/LanguageButton';

export default function HomePage() {
  const { t } = useLocalization();

  return (
    <div className='my-40'>
      {/* <LanguageButton/> */}
    </div>
  );
}

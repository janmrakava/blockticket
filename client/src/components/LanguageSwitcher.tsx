import { useContext } from 'react';
import { locales } from '../services/i18n-config';
import { LocaleContext } from '../services/LocaleContext';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as 'cs-CZ' | 'en-US';
    setLocale(lang);
  };
  return (
    <div>
      <select onChange={handleChange}>
        {Object.keys(locales).map((local) => (
          <option key={local} value={local}>
            {locales[local as 'cs-CZ' | 'en-US'].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

import { IntlProvider } from 'react-intl';
import { defaultLocale, locales } from './i18n-config';
import { ReactNode } from 'react';
import { useState } from 'react';
import { LocaleContext } from './LocaleContext';

interface I18nProps {
  children: ReactNode;
}

export default function I18n(props: I18nProps) {
  const [locale, setLocale] = useState<string>(defaultLocale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={locales[locale].messages}
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

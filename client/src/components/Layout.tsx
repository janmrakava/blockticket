import React from 'react';
import Hero from './HeroSection/Hero';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';
const Layout: React.FC = () => {
  return (
    <>
      <Hero />
      <LanguageSwitcher />
      <h1>
        <FormattedMessage id="app.title" />
      </h1>
      <h2>
        <FormattedMessage id="app.description" />
      </h2>
    </>
  );
};

export default Layout;

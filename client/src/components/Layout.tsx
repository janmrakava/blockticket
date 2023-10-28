import { FormattedMessage } from 'react-intl';
import LanguageSwitcher from './LanguageSwitcher';
const Layout: React.FC = () => {
  return (
    <>
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

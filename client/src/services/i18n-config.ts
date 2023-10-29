import enMessages from './locales/en-US.json';
import czMessages from './locales/cs-CZ.json';
import CZFlag from '../../public/CZ.png';
import ENFlag from '../../public/EN.png';
export const defaultLocale = 'cz';

interface LocaleData {
  name: string;
  img: string;
  messages: {
    [key: string]: string;
  };
}
type Locales = {
  [key: string]: LocaleData;
};

export const locales: Locales = {
  cz: {
    name: 'Čeština',
    img: CZFlag,
    messages: czMessages
  },
  en: {
    name: 'English',
    img: ENFlag,
    messages: enMessages
  }
};

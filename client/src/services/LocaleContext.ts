import { createContext } from "react";

export const LocaleContext = createContext<{
  locale: "cs-CZ" | "en-US";
  setLocale: (lang: "cs-CZ" | "en-US") => void;
}>({
  locale: "cs-CZ", 
  setLocale: (lang) => {   
    console.warn(`LocaleContext setLocale is not implemented for locale: ${lang}`);
  },
});

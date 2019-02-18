import React, { createContext, useEffect, useState } from 'react';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

export const LangContext = createContext(undefined);

export interface LangProviderProps {
  languages: Languages;
  pathname: string;
  children: any;
}

export interface Languages {
  langs: string[];
  defaultLangKey: string;
}

export const LangProvider: React.SFC<LangProviderProps> = (props) => {
  const {
    languages,
    pathname,
    children,
  } = props;

  const { langs, defaultLangKey } = languages;
  const currentLangKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const langsList = getLangs(langs, currentLangKey, getUrlForLang(`/${currentLangKey}/`, pathname));

  const [lang, setLang] = useState(currentLangKey);

  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (localLang) {
      setLang(localLang);
    } else {
      setLang(navigator.language.split('-')[0]);
    }
  });

  return (
    <LangContext.Provider
      value={{
        lang,
        langsList,
        toggleLanguage: (value: string) => {
          setLang(value);
          localStorage.setItem('lang', value);
        },
      }}
    >
      <IntlProvider locale={lang}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export const LangConsumer: React.SFC<{ children: any }> = ({ children }) => (
  <LangContext.Consumer>{children}</LangContext.Consumer>
);

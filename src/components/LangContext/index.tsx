import { navigate } from 'gatsby';
import React, { createContext, useEffect, useState } from 'react';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import 'intl';

export type LangKey = 'en' | 'ru';

export interface Languages {
  langs: LangKey[];
  defaultLangKey: LangKey;
}

export const LangContext = createContext(undefined);

export interface LangProviderProps {
  languages: Languages;
  pathname: string;
  children: any;
}

export interface LangConsumerProps {
  defaultLangKey?: string;
  langKey?: string;
  langsList?: {
    langKey: string;
    link: string;
    selected: boolean;
  }[];
  pathname?: string;
  toggleLanguage?: (value: string) => void;
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

  const [langKey, setLang] = useState(currentLangKey);

  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    let lang = localLang ? localLang : navigator.language.split('-')[0];
    const isSupportedLang = langs.filter(l => lang === l)[0];
    if (!isSupportedLang) lang = defaultLangKey;
    setLang(lang);

    if (langKey !== lang) {
      const prefix = lang === defaultLangKey ? '/' : `/${lang}/`;
      const splitKey = langKey === defaultLangKey ? '/' : `/${langKey}/`;
      const pathArray = pathname.split(splitKey);
      let to = '';

      if (pathArray[1]) to = pathArray[1];
      else if (pathArray[0] !== '/') to = pathArray[0];
      navigate(`${prefix}${to}`);
    }
  });

  return (
    <LangContext.Provider
      value={{
        defaultLangKey,
        langKey,
        langsList,
        pathname,
        toggleLanguage: (value: string) => {
          setLang(value);
          localStorage.setItem('lang', value);
        },
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const LangConsumer: React.SFC<{ children: any }> = ({ children }) => (
  <LangContext.Consumer>{children}</LangContext.Consumer>
);

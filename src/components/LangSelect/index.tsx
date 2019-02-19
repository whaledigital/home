import { navigate } from 'gatsby';
import React from 'react';

import Dropdown from 'components/dropdown/Dropdown';
import { LangConsumer, LangConsumerProps } from 'components/LangContext';

const LangSelect = () => {
  return (
    <LangConsumer>
      {({ langKey, langsList, toggleLanguage, defaultLangKey, pathname }: LangConsumerProps) => {
        const selected = langsList.filter(item => item.langKey === langKey)[0].langKey;
        const options = langsList.map((item) => {
          return {
            label: item.langKey,
            value: item.langKey,
          };
        });
        const onChange = (lang: string) => {
          const selectedLang = langsList.filter(item => item.langKey === lang)[0];
          const prefix = selectedLang.langKey === defaultLangKey ? '/' : selectedLang.link;
          const splitKey = selected === defaultLangKey ? '/' : `/${selected}/`;
          const pathArray = pathname.split(splitKey);
          let to = '';

          if (pathArray[1]) to = pathArray[1];
          else if (pathArray[0] !== '/') to = pathArray[0];

          toggleLanguage(selectedLang.langKey);
          navigate(`${prefix}${to}`);
        };
        return (
          <Dropdown
            onChange={onChange}
            options={options}
            value={selected}
          />
        );
      }}
    </LangConsumer>
  );
};

export default LangSelect;

import { navigate } from 'gatsby';
import React from 'react';
const changeCase = require('change-case');

import Dropdown from 'components/dropdown/Dropdown';
import { LangConsumer } from 'components/LangContext';

interface Lang {
  link: string;
  langKey: string;
  selected: boolean;
}

const LangSelect = () => {
  return (
    <LangConsumer>
      {({ langsList }: { langsList: Lang[]}) => {
        let selected = '';
        const options = langsList.map((item) => {
          if (item.selected) selected = item.langKey;
          return {
            label: changeCase.upperCaseFirst(item.langKey),
            value: item.langKey === 'en' ? '/' : item.link,
          };
        });
        return (
          <Dropdown
            onChange={navigate}
            options={options}
            value={selected}
          />
        );
      }}
    </LangConsumer>
  );
};

export default LangSelect;

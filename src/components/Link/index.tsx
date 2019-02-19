import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

import { LangConsumer, LangConsumerProps } from 'components/LangContext';

const Link = ({ to, ...props }: GatsbyLinkProps<any>) => (
  <LangConsumer>
    {({ langKey, defaultLangKey }: LangConsumerProps) => {
      const path = langKey === defaultLangKey ? to : `/${langKey}${to}`;
      return <GatsbyLink {...props as any} to={path} />;
    }}
  </LangConsumer>
);

export default Link;

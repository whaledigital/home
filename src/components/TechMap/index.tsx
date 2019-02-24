import React from 'react';

import GQL from 'src/graphql-types';
import Section from 'components/Section';

import s from './TechMap.module.scss';

interface TechMapProps {
  items: GQL.ContentfulList[];
  title: string;
}

const TechMap = (props: TechMapProps) => (
  <Section fill="dark" title={props.title}>
    <div className={s.list}>
      {props.items && props.items.map((node: any) => (
        <div key={node.id} className={s.listItem}>
          <p className={s.listItem__title}>{node.title}</p>
          <ul className={s.listItem__list}>
            {node.items && node.items.map((item: GQL.ContentfulList, i: number) => (
              <li className={s.listItem__listItem} key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default TechMap;

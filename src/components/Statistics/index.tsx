import React from 'react';

import GQL from 'src/graphql-types';
import Section from 'components/Section';

import s from './Statistics.module.scss';

interface StatisticsProps {
  items: GQL.ContentfulStatistics[];
}

const Statistics = (props: StatisticsProps) => (
  <Section fill="dark">
    <div className={s.statistics}>
      {props.items && props.items.map((item: GQL.ContentfulStatistics) => (
        <div key={item.id} className={s.statistics__item}>
          <p className={s.statistics__itemTitle}>{item.title}</p>
          <p className={s.statistics__itemDescription}>{item.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Statistics;

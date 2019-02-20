import React from 'react';

import GQL from 'src/graphql-types';
import Section from 'components/Section';

import s from './Statistics.module.scss';

interface StatisticsProps {
  items: GQL.ContentfulStatisticsEdge[];
}

const Statistics = (props: StatisticsProps) => (
  <Section fill="dark">
    <div className={s.statistics}>
      {props.items && props.items.map(({ node }: GQL.ContentfulStatisticsEdge) => (
        <div key={node.id} className={s.statistics__item}>
          <p className={s.statistics__itemTitle}>{node.title}</p>
          <p className={s.statistics__itemDescription}>{node.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Statistics;

import React from 'react';
import classNames from 'classnames';

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
        <div
          key={item.id}
          className={classNames([
            s.statistics__item,
            {
              [s.statistics__itemTwo]: props.items.length === 2,
              [s.statistics__itemOne]: props.items.length === 1,
            },
          ])}
        >
          <p className={s.statistics__itemTitle}>{item.title}</p>
          <p className={s.statistics__itemDescription}>{item.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Statistics;

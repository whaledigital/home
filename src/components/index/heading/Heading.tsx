import React from 'react';

import Segment from 'components/segment/Segment';

import Background from './components/background/Background';
import s from './Heading.module.scss';

interface HeadingProps {
  description: string;
}

const Heading = ({ description }: HeadingProps) => (
  <div className={s.heading}>
    <Segment>
      <h1 className={s.heading__description}>{description}</h1>
    </Segment>
    <div className={s.heading__shadow} />
    <Background fill="#01022a" />
  </div>
);

export default Heading;

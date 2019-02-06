import React from 'react';

import { Segment } from 'components/segment/Segment';

import Background from './components/background/Background';
import s from './Heading.module.scss';

interface HeadingProps {
  description: string;
}

const Heading = ({ description }: HeadingProps) => (
  <>
    <Segment>
      <h1 className={s.description}>{description}</h1>
    </Segment>
    <Background fill="#01022a" />
  </>
);

export default Heading;

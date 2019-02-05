import React from 'react';

import { Segment } from 'components/segment/Segment';

import s from './Heading.module.scss';

interface HeadingProps {
  description: string;
}

const Heading = ({ description }: HeadingProps) => (
  <Segment>
    <h1 className={s.description}>{description}</h1>
  </Segment>
);

export default Heading;

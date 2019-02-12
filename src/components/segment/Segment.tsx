import React from 'react';
import classNames from 'classnames';

import { Container } from 'components/container/Container';

import s from './Segment.module.scss';

interface SegmentProps {
  children: React.ReactNode;
  container?: boolean;
  title?: string;
  inverted?: boolean;
}

const Segment = (props: SegmentProps) => {
  const { children, container, title, inverted } = props;
  const content = container ? <Container title={title}>{children}</Container> : children;

  return (
    <section className={classNames(s.segment, { [s.segment__inverted]: inverted })}>
      {content}
    </section>
  );
};

Segment.defaultProps = {
  container: true,
  inverted: false,
};

export default Segment;

import React from 'react';

import { Container } from 'components/container/Container';

import s from './Segment.module.scss';

interface SegmentProps {
  children: React.ReactNode;
  container?: boolean;
  inverted?: boolean;
}

export const Segment = (props: SegmentProps) => {
  const { children, container, inverted } = props;
  const content = container ? <Container>{children}</Container> : children;
  const className = inverted ? [s.segment, s.segment__inverted].join(' ') : s.segment;

  return (
    <section className={className}>
      {content}
    </section>
  );
};

Segment.defaultProps = {
  container: true,
  inverted: false,
};

import React from 'react';
import classNames from 'classnames';

import Container from './components/Container';

import s from './Segment.module.scss';

type FillType = 'dark' | 'light';

interface SegmentProps {
  children: React.ReactNode;
  container?: boolean;
  title?: string;
  fill?: FillType;
}

const Segment = (props: SegmentProps) => {
  const { children, container, title, fill } = props;
  const content = container ? <Container title={title}>{children}</Container> : children;

  return (
    <section
      className={classNames(s.segment, {
        [s.segment__fillDark]: fill === 'dark',
        [s.segment__fillLight]: fill === 'light',
      })}
    >
      {content}
    </section>
  );
};

Segment.defaultProps = {
  container: true,
};

export default Segment;

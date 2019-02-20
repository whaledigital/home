import React from 'react';
import classNames from 'classnames';

import Container from './components/Container';

import s from './Section.module.scss';

type FillType = 'dark' | 'light';

interface SectionProps {
  children: React.ReactNode;
  container?: boolean;
  title?: string;
  fill?: FillType;
}

const Section = (props: SectionProps) => {
  const { children, container, title, fill } = props;
  const content = container ? <Container title={title}>{children}</Container> : children;

  return (
    <section
      className={classNames(s.section, {
        [s.section__fillDark]: fill === 'dark',
        [s.section__fillLight]: fill === 'light',
      })}
    >
      {content}
    </section>
  );
};

Section.defaultProps = {
  container: true,
};

export default Section;

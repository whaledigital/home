import React from 'react';

import s from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  title?: string;
}

export const Container = ({ children, title }: ContainerProps) => {
  const heading = title ? <h2 className={s.container__title}>{title}</h2> : null;

  return (
    <section className={s.container}>
      {heading}
      {children}
    </section>
  );
};

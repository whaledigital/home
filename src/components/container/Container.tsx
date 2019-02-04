import React from 'react';

import s from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <section className={s.container}>
    {children}
  </section>
);

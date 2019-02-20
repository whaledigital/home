import React from 'react';

import s from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  title?: string;
}

const Container = ({ children, title }: ContainerProps) => {
  const heading = title ? <h2 className={s.container__title} data-aos="fade-up">{title}</h2> : null;

  return (
    <div className={s.container}>
      {heading}
      {children}
    </div>
  );
};

export default Container;

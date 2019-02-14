import React from 'react';

import Background from './components/background/Background';
import Button from 'components/button/Button';

import s from './Heading.module.scss';

interface HeadingProps {
  description: string;
}

const Heading = ({ description }: HeadingProps) => (
  <div className={s.heading}>
    <div className={s.heading__gradient} />
    <div className={s.heading__background}>
      <Background fill="#101229" />
    </div>
    <div className={s.heading__shadow} />
    <div className={s.heading__container}>
      <h1 className={s.heading__containerDescription} data-aos="fade-right">{description}</h1>
      <div className={s.heading__containerButton} data-aos="fade-left">
        <Button title="Start a project" size="large" />
      </div>
    </div>
  </div>
);

export default Heading;

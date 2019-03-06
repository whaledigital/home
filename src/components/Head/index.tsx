import React from 'react';
import classNames from 'classnames';

import Background from './components/Background';
import Button from 'components/button/Button';

import s from './Head.module.scss';

type HeadType = 'home' | 'service' | 'page' | 'small';

interface HeadProps {
  type: HeadType;
  title: string;
  description?: string;
  button?: string;
}

const renderBackground = (type: HeadType) => {
  if (type === 'home') {
    return (
      <>
        <div className={s.heading__homeGradient} />
        <div className={s.heading__homeBackground}>
          <Background fill="#101229" />
        </div>
        <div className={s.heading__homeShadow} />
      </>
    );
  }
  if (type === 'service') {
    return (
      <svg viewBox="0 0 800 100" className={s.heading__serviceBackground__svg}>
        <path d="M 0 50 Q 200 100 400 50 Q 600 0 800 50 L 800 100 L 0 100 Z" />
      </svg>
    );
  }
  if (type === 'page' || type === 'small') {
    return null;
  }
};

const Head = ({ type, title, description, button }: HeadProps) => (
  <div
    className={classNames(s.heading, {
      [s.heading__home]: type === 'home',
      [s.heading__service]: type === 'service',
      [s.heading__page]: type === 'page',
      [s.heading__small]: type === 'small',
    })}
  >
    {renderBackground(type)}
    <div className={s.heading__container}>
      <div className={s.heading__base}>
        <h1 className={s.heading__baseTitle} data-aos="fade-right">{title}</h1>
        {
          description &&
          <p className={s.heading__baseDescription} data-aos="fade-right">
            {description}
          </p>
        }
      </div>
      <div className={s.heading__sub} data-aos="fade-left">
        {
          button &&
          <Button title={button} size="large" />
        }
      </div>
    </div>
  </div>
);

Head.defaultProps = {
  type: 'page',
};

export default Head;

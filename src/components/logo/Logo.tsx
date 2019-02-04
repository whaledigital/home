import React from 'react';

import LogoSVG from 'assets/svg/logo.svg';

import s from './Logo.module.scss';

interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo = (props: LogoProps) => (
  <div className={s.logo}>
    <LogoSVG className={s.logo__svg} {...props} />
    <h3 className={s.logo__name}>
      whale<span>digital</span>
    </h3>
  </div>
);

Logo.defaultProps = {
  height: 40,
  width: 40,
};

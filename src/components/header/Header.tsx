import { Link } from 'gatsby';
import React from 'react';

import { Logo } from 'components/logo/Logo';

import s from './Header.module.scss';

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          <Logo />
        </Link>
        <div className={s.header__navigation}>
          {children}
        </div>
      </div>
    </div>
  </header>
);

import { Link } from 'gatsby';
import React from 'react';

import Logo from 'components/logo/Logo';
import Dropdown from 'components/dropdown/Dropdown';
import Button from 'components/button/Button';

import s from './Header.module.scss';

interface HeaderProps {
  children?: React.ReactNode;
}

const options = [
  {
    label: 'Ru',
    value: 'ru',
  },
  {
    label: 'En',
    value: 'en',
  },
];

export const Header = ({ children }: HeaderProps) => (
  <header className={s.header} data-aos="fade-bottom">
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          <Logo />
        </Link>
        <div className={s.header__navigation}>
          <div className={s.header__navigationMenu}>
            {children}
          </div>
          <div className={s.header__navigationButtons}>
            <Dropdown
              onChange={console.log}
              options={options}
              value="ru"
            />
            <Button title="Start a project" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

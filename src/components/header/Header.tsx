import { Link } from 'gatsby';
import React, { useState } from 'react';
import classNames from 'classnames';

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

export const Header = ({ children }: HeaderProps) => {
  const [menu, toggleMenu] = useState(false);
  const onMenuClick = () => toggleMenu(!menu);

  return (
    <>
      <header className={s.header} data-aos="fade-bottom">
        <div className={s.header__container}>
          <div className={s.header__content}>
            <Link to="/" className={s.header__logo}>
              <Logo />
            </Link>
            <div className={s.header__navigation}>
              <div className={s.header__navigationButtons}>
                <Dropdown
                  onChange={console.log}
                  options={options}
                  value="ru"
                />
                <Button title="Start a project" />
              </div>
              <div
                className={classNames(s.header__navigationBurger, {
                  [s.header__navigationBurger__opened]: menu,
                })}
                onClick={onMenuClick}
              >
                <div className={s.bar} />
                <div className={s.bar} />
                <div className={s.bar} />
              </div>
              <nav className={s.header__navigationMenu}>
                {children}
              </nav>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={classNames(s.header__mobileMenu, {
          [s.header__mobileMenu__opened]: menu,
        })}
      >
        {children}
        <div className={s.header__mobileButtons}>
          <Dropdown
            onChange={console.log}
            options={options}
            value="ru"
          />
          <Button title="Start a project" size="large" />
        </div>
      </nav>
    </>
  );
};

import { Link, navigate } from 'gatsby';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Logo from 'components/logo/Logo';
import Dropdown from 'components/dropdown/Dropdown';
import Button from 'components/button/Button';
import LangSelect from 'components/LangSelect';

import s from './Header.module.scss';

interface Lang {
  link: string;
  langKey: string;
  selected: boolean;
}

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const [menu, toggleMenu] = useState(false);
  const [visibility, setVisibility] = useState({
    background: false,
    prevScrollpos: 0,
    visible: true,
  });

  useEffect(() => {
    function handleScroll () {
      const { prevScrollpos } = visibility;

      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos || currentScrollPos <= 0;
      const background = currentScrollPos > window.innerHeight / 3;

      setVisibility({
        background,
        visible,
        prevScrollpos: currentScrollPos,
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const onMenuClick = () => toggleMenu(!menu);

  return (
    <>
      <header
        className={classNames(s.header, {
          [s.headerHidden]: !visibility.visible && !menu,
          [s.headerBackground]: visibility.background,
        })}
      >
        <div className={s.header__container}>
          <div className={s.header__content}>
            <Link to="/" className={s.header__logo}>
              <Logo />
            </Link>
            <div className={s.header__navigation}>
              <div className={s.header__navigationButtons}>
                <LangSelect />
                <div
                  className={classNames({
                    [s.header__navigationButtons_hidden]: !visibility.background },
                  )}
                >
                  <Button title="Start a project" />
                </div>
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
          <LangSelect />
          <Button title="Start a project" size="large" />
        </div>
      </nav>
    </>
  );
};

const renderLangs = (langs: Lang[]) => {
  let selected = '';
  const options = langs.map((item) => {
    if (item.selected) selected = item.langKey;
    return {
      label: item.langKey,
      value: item.link,
    };
  });
  return (
    <Dropdown
      onChange={navigate}
      options={options}
      value={selected}
    />
  );
};

import { Link } from 'gatsby';
import React from 'react';

import * as s from './Navigation.module.scss';

export interface MenuItem {
  name: string;
  path: string;
}

interface MenuProps extends React.HTMLProps<HTMLDivElement> {
  items: MenuItem[];
  pathname: string;
}

export const Navigation = ({ items, pathname }: MenuProps) => (
  <ul className={s.navigation}>
    {items.map((item) => {
      const activeClassName = pathname === item.path ? s.navigation__itemActive : undefined;
      return (
        <li key={item.path} className={s.navigation__item}>
          <Link to={item.path} activeClassName={activeClassName}>
            {item.name}
          </Link>
        </li>
      );
    })}
  </ul>
);

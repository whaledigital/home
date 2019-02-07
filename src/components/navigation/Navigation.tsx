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

export const Navigation = ({ items }: MenuProps) => (
  <ul className={s.navigation}>
    {items.map(item => (
        <li key={item.path} className={s.navigation__item}>
          <Link to={item.path} activeClassName={s.navigation__itemActive}>
            {item.name}
          </Link>
        </li>
      ))}
  </ul>
);

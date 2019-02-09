import { Link } from 'gatsby';
import React from 'react';

import { ContentfulNavigationEdge } from 'src/graphql-types';

import * as s from './Navigation.module.scss';

interface MenuProps extends React.HTMLProps<HTMLDivElement> {
  items: ContentfulNavigationEdge[];
  pathname: string;
}

export const Navigation = ({ items }: MenuProps) => (
  <ul className={s.navigation}>
    {items.map(({ node }) => {
      const slug = node.slug ? `/${node.slug}` : '/';
      return (
        <li key={slug} className={s.navigation__item}>
          <Link to={slug} activeClassName={s.navigation__itemActive}>
            {node.title}
          </Link>
        </li>
      );
    })}
  </ul>
);

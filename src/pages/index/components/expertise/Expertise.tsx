import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { ImageSharp } from 'src/graphql-types';
import { Segment } from 'components/segment/Segment';

import s from './Expertise.module.scss';

interface ExpertiseNode {
  node: {
    title: string;
    slug: string;
    directions: string[];
    image: ImageSharp;
  };
}

interface ExpertiseProps {
  items: ExpertiseNode[];
}

export const Expertise = ({ items }: ExpertiseProps) => (
  <Segment inverted>
    {items.map(({ node }: ExpertiseNode) => (
      <div key={node.slug}>
        <h2>{node.title}</h2>
        <div>
          <Link to={node.slug}>
            <Img fluid={node.image.fluid} />
            <p>{node.directions.join(' / ')}</p>
          </Link>
        </div>
      </div>
    ))}
  </Segment>
);

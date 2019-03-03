import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import {
  ContentfulTilesEdge,
} from 'src/graphql-types';
import Section from 'components/Section';

import s from './Tiles.module.scss';

interface TilesProps {
  items: ContentfulTilesEdge[];
  title: string;
}

class Tiles extends React.Component<TilesProps> {
  render () {
    if (!this.props.items) return null;

    return (
      <Section title={this.props.title}>
        <div className={s.tiles}>
          {this.props.items.map(({ node }: ContentfulTilesEdge) => (
            <div key={node.id} className={s.tiles__item} data-aos="fade-top">
              <Img fluid={node.image.fluid} className={s.tiles__itemPhoto} />
            </div>
          ))}
        </div>
      </Section>
    );
  }
}

export default Tiles;

export const expertQuery = graphql`
  fragment TilesFragment on ContentfulTiles {
    id
    image {
      fluid(maxWidth: 240) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
`;

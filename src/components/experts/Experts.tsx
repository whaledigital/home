import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Slider from 'react-slick';

import {
  ContentfulExpertEdge,
} from 'src/graphql-types';
import Segment from 'components/Segment';
import Box3D from 'components/box3d/Box3D';

import s from './Experts.module.scss';

interface ExpertsProps {
  items: ContentfulExpertEdge[];
  title: string;
}

class Experts extends React.Component<ExpertsProps> {
  render () {
    if (!this.props.items) return null;

    const settings = {
      arrows: false,
      className: s.experts,
      infinite: false,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3.2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.2,
          },
        },
      ],
      slidesToScroll: 4,
      slidesToShow: 4,
      speed: 500,
    };

    return (
      <Segment title={this.props.title}>
        <Slider {...settings}>
          {this.props.items.map(({ node }: ContentfulExpertEdge) => {
            return (
              <div key={node.id} className={s.experts__item} data-aos="fade-up">
                <Box3D>
                  <Img fluid={node.photo.fluid} className={s.experts__itemPhoto} />
                </Box3D>
                <div className={s.experts__itemTitle}>{node.title}</div>
                <div className={s.experts__itemPosition}>{node.position}</div>
              </div>
            );
          })}
        </Slider>
      </Segment>
    );
  }
}

export default Experts;

export const expertQuery = graphql`
  fragment ExpertFragment on ContentfulExpert {
    id
    title
    position
    photo {
      fluid(maxWidth: 280) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
`;

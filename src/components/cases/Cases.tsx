import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import classNames from 'classnames';

import 'slick-carousel/slick/slick.scss';

import IconPrev from 'assets/svg/arrow_prev.svg';
import IconNext from 'assets/svg/arrow_next.svg';

import {
  ContentfulCaseEdge,
} from 'src/graphql-types';
import Segment from 'components/Segment';
import Box3D from 'components/box3d/Box3D';
import Link from 'components/Link';

import s from './Cases.module.scss';

const NextArrow = (props: CustomArrowProps) => (
  <div
    className={classNames(s.cases__arrow, s.cases__arrowNext)}
    onClick={props.onClick}
    data-aos="fade-left"
  >
    <IconNext />
  </div>
);

const PrevArrow = (props: CustomArrowProps) => (
  <div
    className={classNames(s.cases__arrow, s.cases__arrowPrev)}
    onClick={props.onClick}
    data-aos="fade-right"
  >
    <IconPrev />
  </div>
);

interface CasesProps {
  items: ContentfulCaseEdge[];
  title: string;
}

class Cases extends React.Component<CasesProps> {
  render () {
    if (!this.props.items) return null;

    const settings = {
      className: s.cases,
      infinite: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1.1,
          },
        },
      ],
      slidesToShow: 1.5,
      speed: 500,
    };

    return (
      <Segment title={this.props.title}>
        <Slider {...settings}>
          {this.props.items.map(({ node }: ContentfulCaseEdge, i: number) => {
            return (
              <Link
                key={node.id}
                className={s.cases__item}
                to={`/${node.slug}`}
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="500"
                data-aos-delay={(i + 1) * 100}
              >
                <Box3D perspective={60}>
                  <Img
                    className={s.cases__itemThumbnail}
                    fluid={node.thumbnail.fluid}
                  />
                </Box3D>
                <p className={s.cases__itemTitle}>{node.title}</p>
                <p className={s.cases__itemDescription}>{node.description}</p>
              </Link>
            );
          })}
        </Slider>
      </Segment>
    );
  }
}

export default Cases;

export const caseQuery = graphql`
  fragment CaseFragment on ContentfulCase {
    id
    title
    slug
    thumbnail {
      fluid(maxHeight: 400) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    description
  }
`;

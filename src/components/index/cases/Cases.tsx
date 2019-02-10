import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import 'slick-carousel/slick/slick.scss';

import IconPrev from 'assets/svg/arrow_prev.svg';
import IconNext from 'assets/svg/arrow_next.svg';

import {
  ContentfulCaseEdge,
} from 'src/graphql-types';
import Segment from 'components/segment/Segment';
import Box3D from 'components/box3d/Box3D';

import s from './Cases.module.scss';

const NextArrow = (props: CustomArrowProps) => (
  <div
    className={[s.cases__arrow, s.cases__arrowNext].join(' ')}
    onClick={props.onClick}
  >
    <IconNext />
  </div>
);

const PrevArrow = (props: CustomArrowProps) => (
  <div
    className={[s.cases__arrow, s.cases__arrowPrev].join(' ')}
    onClick={props.onClick}
  >
    <IconPrev />
  </div>
);

interface CaseProps {
  items: ContentfulCaseEdge[];
}

class Cases extends React.Component<CaseProps> {
  render () {
    if (!this.props.items) return null;

    const settings = {
      className: s.cases,
      infinite: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      slidesToShow: 1.5,
      speed: 500,
    };

    return (
      <Segment title="Cases">
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
                  <Box3D height="100%" width="100%" perspective={60}>
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

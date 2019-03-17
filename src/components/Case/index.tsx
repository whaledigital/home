import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import 'slick-carousel/slick/slick.scss';

import Browser from 'assets/svg/browser.svg';
import IPhone from 'assets/svg/iphone.svg';

import GQL from 'src/graphql-types';
import Section from 'components/Section';
import Link from 'components/Link';
import Statistics from 'components/Statistics';

import s from './Case.module.scss';

interface CaseProps {
  title: string;
  description: string;
  leadText: { leadText: string };
  task: { task: string };
  solution: { solution: string };
  statistics: GQL.ContentfulStatistics[];
  imageWeb: GQL.ContentfulAsset[];
  imageFull: GQL.ContentfulAsset[];
  imageMobile: GQL.ContentfulAsset[];
}

class Case extends React.Component<CaseProps> {
  render () {
    const sliderWeb = {
      className: s.case__sliderWeb,
      infinite: false,
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 2,
      speed: 500,
    };

    const sliderMobile = {
      className: s.case__sliderMobile,
      infinite: false,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 3,
      speed: 500,
    };

    return (
      <>
        <Section>
          <h1 className={s.caseTitle}>{this.props.title}</h1>
          <p className={s.caseDescription}>{this.props.description}</p>
          <p className={s.caseLead}>{this.props.leadText.leadText}</p>
          <div className={s.case__tiles}>
            <div className={s.case__tilesItem}>
              <p className={s.case__tilesItem__title}>Task</p>
              <p className={s.case__tilesItem__description}>{this.props.task.task}</p>
            </div>
            <div className={s.case__tilesItem}>
              <p className={s.case__tilesItem__title}>Solution</p>
              <p className={s.case__tilesItem__description}>{this.props.solution.solution}</p>
            </div>
          </div>
        </Section>
        <Statistics items={this.props.statistics} />
        <Section>
          <Slider {...sliderWeb}>
            {this.props.imageWeb.map(image => (
              <div key={image.id} className={s.case__sliderWeb__item}>
                <div className={s.case__sliderWeb__itemWrapper}>
                  <Browser width="100%" className={s.case__sliderWeb__itemSvg} />
                  <Img fluid={image.fluid} className={s.case__sliderWeb__itemImage} />
                </div>
              </div>
            ))}
          </Slider>
        </Section>
        {this.props.imageFull.map(image => <Img key={image.id} fluid={image.fluid} />)}
        <Section>
          <Slider {...sliderMobile}>
            {this.props.imageMobile.map(image => (
              <div key={image.id} className={s.case__sliderMobile__item}>
                <Img fluid={image.fluid} className={s.case__sliderMobile__itemImage} />
                <IPhone width="100%" height="100%" className={s.case__sliderMobile__itemSvg} />
              </div>
            ))}
          </Slider>
        </Section>
      </>
    );
  }
}

export default Case;

import Img from 'gatsby-image';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.scss';

import Browser from 'assets/svg/browser.svg';
import IPhone from 'assets/svg/iphone.svg';

import GQL from 'src/graphql-types';
import Section from 'components/Section';
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
      arrows: false,
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
      arrows: false,
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
          {this.props.leadText && <p className={s.caseLead}>{this.props.leadText.leadText}</p>}
          <div className={s.case__tiles}>
            {
              this.props.task &&
              <div className={s.case__tilesItem}>
                <p className={s.case__tilesItem__title}>Task</p>
                <p className={s.case__tilesItem__description}>{this.props.task.task}</p>
              </div>
            }
            {
              this.props.solution &&
              <div className={s.case__tilesItem}>
                <p className={s.case__tilesItem__title}>Solution</p>
                <p className={s.case__tilesItem__description}>{this.props.solution.solution}</p>
              </div>
            }
          </div>
        </Section>
        {
          this.props.statistics &&
          <Statistics items={this.props.statistics} />
        }
        {
          this.props.imageWeb &&
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
        }
        {
          this.props.imageFull && this.props.imageFull[1] &&
          <div className={s.case__fullImage}>
            <Img key={this.props.imageFull[1].id} fluid={this.props.imageFull[1].fluid} />
          </div>
        }
        {
          this.props.imageMobile &&
          <Section fill="dark">
            <Slider {...sliderMobile}>
              {this.props.imageMobile.map(image => (
                <div key={image.id} className={s.case__sliderMobile__item}>
                  <div className={s.case__sliderMobile__itemWrapper}>
                    <Img fluid={image.fluid} className={s.case__sliderMobile__itemImage} />
                    <IPhone width="100%" height="100%" className={s.case__sliderMobile__itemSvg} />
                  </div>
                </div>
              ))}
            </Slider>
          </Section>
        }
      </>
    );
  }
}

export default Case;

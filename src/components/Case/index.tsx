import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import 'slick-carousel/slick/slick.scss';

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
          <h4>Web version</h4>
          {this.props.imageWeb.map(image => <Img key={image.id} fixed={image.fixed} />)}
        </Section>
        {this.props.imageFull.map(image => <Img key={image.id} fluid={image.fluid} />)}
        <Section>
          <h4>Mobile version</h4>
          {this.props.imageMobile.map(image => <Img key={image.id} fixed={image.fixed} />)}
        </Section>
      </>
    );
  }
}

export default Case;

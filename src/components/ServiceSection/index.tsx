import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';

import GQL from 'src/graphql-types';
import Segment from 'components/Segment';
import Box3D from 'components/box3d/Box3D';

import s from './ServiceSection.module.scss';

interface ServiceSectionProps {
  subtitle: string;
  title: string;
  description: string;
  listTitle: string;
  list: string[];
  thumbnail: GQL.ContentfulAsset;
  reverse: boolean;
}

const ServiceSection = (props: ServiceSectionProps) => {
  return (
    <Segment>
      <div
        className={classNames(s.section, {
          [s.section__reverse]: props.reverse,
        })}
      >
        <div className={s.section__col} data-aos={props.reverse ? 'fade-left' : 'fade-right'}>
          <div className={s.sectionSubtitle}>{props.subtitle}</div>
          <h2 className={s.sectionTitle}>{props.title}</h2>
          <p className={s.sectionDescription}>{props.description}</p>
          <p className={s.sectionListTitle}>{props.listTitle}</p>
          <ul className={s.sectionList}>
            {props.list && props.list.map((listItem: any, i: number) => (
              <li key={i} className={s.sectionListItem}>{listItem}</li>
            ))}
          </ul>
        </div>
        <div className={s.section__col} data-aos={props.reverse ? 'fade-right' : 'fade-left'}>
          <div className={s.sectionThumb}>
            <div className={s.sectionThumb__shadow} />
            <Box3D>
              <Img fixed={props.thumbnail.fixed} />
            </Box3D>
          </div>
        </div>
      </div>
    </Segment>
  );
};

export default ServiceSection;

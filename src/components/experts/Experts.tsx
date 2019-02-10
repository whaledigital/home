import Img from 'gatsby-image';
import React from 'react';

import {
  ContentfulExpertEdge,
} from 'src/graphql-types';
import Segment from 'components/segment/Segment';
import Box3D from 'components/box3d/Box3D';

import s from './Experts.module.scss';

interface ExpertsProps {
  items: ContentfulExpertEdge[];
}

class Experts extends React.Component<ExpertsProps> {
  render () {
    if (!this.props.items) return null;
    return (
      <Segment title="Experts">
        <div className={s.experts}>
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
        </div>
      </Segment>
    );
  }
}

export default Experts;

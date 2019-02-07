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

interface ExpertiseState {
  active: string;
  item: ExpertiseNode;
}

class Expertise extends React.Component<ExpertiseProps, ExpertiseState> {
  state = {
    active: this.props.items[0].node.slug,
    item: this.props.items[0],
  };

  render () {
    const { items } = this.props;
    const { active, item } = this.state;
    if (!items) return null;

    return (
      <Segment title="Services">
        <div className={s.expertise}>
          <ul className={s.expertise__list}>
            {items.map(({ node }: ExpertiseNode) => {
              const activeClass = active === node.slug ? s.expertise__list__itemActive : undefined;
              const onClick = () => this.setState({ active: node.slug, item: { node } });

              return (
                <li key={node.slug} className={s.expertise__list__item}>
                  <a onClick={onClick} className={activeClass}>{node.title}</a>
                </li>
              );
            })}
          </ul>
          <div className={s.expertise__frame} />
          <div className={s.expertise__showcase}>
            <Link to={`/${item.node.slug}`} className={s.expertise__showcase__item}>
              <Img fluid={item.node.image.fluid} />
              <h4>{item.node.directions.join(' / ')}</h4>
            </Link>
          </div>
        </div>
      </Segment>
    );
  }
}

export default Expertise;

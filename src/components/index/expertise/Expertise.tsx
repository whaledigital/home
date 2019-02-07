import { Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { ImageSharp } from 'src/graphql-types';
import Segment from 'components/segment/Segment';
import Box3D from 'components/box3d/Box3D';

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
  height: number;
  width: number;
  opacity: number;
}

class Expertise extends React.Component<ExpertiseProps, ExpertiseState> {
  state = {
    active: this.props.items[0].node.slug,
    item: this.props.items[0],

    height: 0,
    width: 0,

    opacity: 1,
  };

  expertiseRef: HTMLElement;

  componentDidMount () {
    this.setState({
      height: this.expertiseRef.offsetWidth,
      width: this.expertiseRef.offsetWidth,
    });
  }

  render () {
    const { items } = this.props;
    const { active, item, opacity } = this.state;
    if (!items) return null;

    return (
      <Segment title="Services">
        <div className={s.expertise}>
          <ul className={s.expertise__list}>
            {items.map(({ node }: ExpertiseNode) => {
              const activeClass = active === node.slug ? s.expertise__list__itemActive : undefined;
              const onClick = () => {
                if (node.slug === this.state.active) return navigate(`/${node.slug}`);
                this.setState({ opacity: 0 }, () => {
                  setTimeout(
                    () => this.setState({ active: node.slug, item: { node }, opacity: 1 }),
                    200);
                });
              };

              return (
                <li key={node.slug} className={s.expertise__list__item}>
                  <a onClick={onClick} className={activeClass}>{node.title}</a>
                </li>
              );
            })}
          </ul>
          <div className={s.expertise__frame} />
          <div
            className={s.expertise__showcase}
            ref={ref => this.expertiseRef = ref}
            style={{ opacity }}
          >
            <Box3D
              height={this.state.height}
              width={this.state.width}
            >
              <Link
                to={`/${item.node.slug}`}
                className={s.expertise__showcase__item}
              >
                <Img
                  fluid={item.node.image.fluid}
                  className={s.expertise__showcase__itemImage}
                  fadeIn={true}
                />
                <div className={s.expertise__showcase__itemShadow} />
                <h4>{item.node.directions.join(' / ')}</h4>
              </Link>
            </Box3D>
          </div>
        </div>
      </Segment>
    );
  }
}

export default Expertise;

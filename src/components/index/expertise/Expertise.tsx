import { Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import {
  ContentfulServiceEdge,
} from 'src/graphql-types';
import Segment from 'components/segment/Segment';
import Box3D from 'components/box3d/Box3D';

import s from './Expertise.module.scss';

interface ExpertiseProps {
  items: ContentfulServiceEdge[];
}

interface ExpertiseState {
  active: string;
  height: number;
  width: number;
}

class Expertise extends React.Component<ExpertiseProps, ExpertiseState> {
  state = {
    active: '',
    height: 0,
    width: 0,
  };

  expertiseRef: HTMLElement;
  listRef: HTMLElement;

  componentDidMount () {
    this.setState({
      height: this.listRef.offsetHeight,
      width: this.expertiseRef.offsetWidth,
    });
  }

  renderMenu = () => (
    <ul ref={ref => this.listRef = ref} className={s.expertise__list}>
      {this.props.items.map(({ node }: ContentfulServiceEdge, i: number) => {
        const onClick = () => navigate(`/${node.slug}`);
        const onMouseOver = () => this.setState({ active: node.id });

        return (
          <li
            key={node.id}
            className={s.expertise__list__item}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay={(i + 1) * 50}
          >
            <a onClick={onClick} onMouseOver={onMouseOver}>
              {node.title}
            </a>
          </li>
        );
      })}
    </ul>
  );

  render () {
    const { items } = this.props;
    const { active, height, width } = this.state;
    if (!items) return null;

    return (
      <Segment title="Services">
        <div className={s.expertise}>
          {this.renderMenu()}
          {/* <div
            className={s.expertise__frame}
            data-aos="zoom-in"
            data-aos-delay="500"
          /> */}
          <div
            ref={ref => this.expertiseRef = ref}
            className={s.expertise__showcase}
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            {items.map(({ node }: ContentfulServiceEdge, i: number) => {
              const classContainer = !active && i === 0 || active === node.id
                ? [s.expertise__showcase__container, s.expertise__showcase__containerActive]
                  .join(' ')
                : s.expertise__showcase__container;
              return (
                <div key={node.id} className={classContainer}>
                  <Box3D height={height} width={width}>
                    <Link to={`/${node.slug}`} className={s.expertise__showcase__item}>
                      <Img fluid={node.image.fluid} className={s.expertise__showcase__itemImage} />
                      <div className={s.expertise__showcase__itemShadow} />
                      <h4 className={s.expertise__showcase__itemTitle}>
                        {node.directions.join(' / ')}
                      </h4>
                    </Link>
                  </Box3D>
                </div>
              );
            })}
          </div>
        </div>
      </Segment>
    );
  }
}

export default Expertise;

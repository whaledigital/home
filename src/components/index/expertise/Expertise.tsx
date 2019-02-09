import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Bubbles1 from 'assets/svg/bubbles-1.svg';
import Bubbles2 from 'assets/svg/bubbles-2.svg';

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
            <Link to={`/${node.slug}`} onMouseOver={onMouseOver}>
              {node.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  renderBoxes = () => (
    <div
      ref={ref => this.expertiseRef = ref}
      className={s.expertise__showcase}
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
    >
      {this.props.items.map(({ node }: ContentfulServiceEdge, i: number) => {
        const classContainer = !this.state.active && i === 0 || this.state.active === node.id
          ? [s.expertise__showcase__container, s.expertise__showcase__containerActive]
            .join(' ')
          : s.expertise__showcase__container;
        return (
          <div key={node.id} className={classContainer}>
            <div
              className={s.expertise__frame}
              data-aos="zoom-in"
              data-aos-delay="500"
            />
            <Box3D height={this.state.height} width={this.state.width}>
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
  );

  render () {
    if (!this.props.items) return null;
    return (
      <Segment title="Expertise">
        <div className={s.expertise}>
          {this.renderMenu()}
          {this.renderBoxes()}
          <div className={s.expertise__bubbles1} data-aos="zoom-in" data-aos-delay="500">
            <Bubbles1 />
          </div>
          <div className={s.expertise__bubbles2} data-aos="zoom-in" data-aos-delay="500">
            <Bubbles2 />
          </div>
        </div>
      </Segment>
    );
  }
}

export default Expertise;

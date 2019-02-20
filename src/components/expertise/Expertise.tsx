import { navigate, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import classNames from 'classnames';

import Bubbles1 from 'assets/svg/bubbles-1.svg';
import Bubbles2 from 'assets/svg/bubbles-2.svg';

import {
  ContentfulServiceEdge,
} from 'src/graphql-types';
import Section from 'components/Section';
import Box3D from 'components/box3d/Box3D';
import Link from 'components/Link';

import s from './Expertise.module.scss';

interface ExpertiseProps {
  title: string;
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
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions, false);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => this.setState({
    height: this.expertiseRef.offsetHeight,
    width: this.expertiseRef.offsetWidth,
  });

  renderMenu = () => (
    <ul ref={ref => this.listRef = ref} className={s.expertise__list} data-aos="fade">
      {this.props.items.map(({ node }: ContentfulServiceEdge, i: number) => {
        const onMouseOver = () => this.setState({ active: node.id });
        const onClick = () => {
          if (this.state.active !== node.id) {
            return this.setState({ active: node.id });
          }
          navigate(`/${node.slug}`);
        };
        return (
          <li
            key={node.id}
            className={s.expertise__list__item}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay={(i + 1) * 50}
          >
            <Link
              to={`/${node.slug}`}
              onMouseOver={onMouseOver}
              className={s.expertise__list__itemLink}
            >
              {node.title}
            </Link>
            <a
              onClick={onClick}
              className={s.expertise__list__itemTab}
            >
              {node.title}
            </a>
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
        const active = !this.state.active && i === 0 || this.state.active === node.id;
        return (
          <div
            key={node.id}
            className={classNames(
              s.expertise__showcase__container,
              { [s.expertise__showcase__containerActive]: active },
            )}
          >
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
                  {node.directions && node.directions.join(' / ')}
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
      <Section title={this.props.title}>
        <div className={s.expertise}>
          {this.renderMenu()}
          {this.renderBoxes()}
          <div
            className={classNames(s.expertise__bubbles, s.expertise__bubbles1)}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Bubbles1 />
          </div>
          <div
            className={classNames(s.expertise__bubbles, s.expertise__bubbles2)}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Bubbles2 />
          </div>
        </div>
      </Section>
    );
  }
}

export default Expertise;

export const expertiseQuery = graphql`
  fragment ServiceFragment on ContentfulService {
    id
    title
    slug
    image {
      fluid(maxWidth: 700) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    directions
  }
`;

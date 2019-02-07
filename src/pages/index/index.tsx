import { graphql } from 'gatsby';
import React from 'react';
import get from 'lodash/get';

import { withLayout, LayoutProps } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Expertise from 'components/index/expertise/Expertise';
import Heading from 'components/index/heading/Heading';

class IndexPage extends React.Component<LayoutProps> {
  render () {
    const [home] = get(this, 'props.data.allContentfulHome.edges');
    const services = get(this, 'props.data.allContentfulService.edges');
    return (
      <>
        <SEO title={home.node.title} keywords={[`development`]} />
        <Heading description={home.node.description.description} />
        <Expertise items={services} />
      </>
    );
  }
}

export default withLayout(IndexPage);

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHome {
      edges {
        node {
          title
          description {
            description
          }
        }
      }
    }
    allContentfulService(sort: { fields: order }) {
      edges {
        node {
          title
          slug
          image {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          directions
        }
      }
    }
  }
`;

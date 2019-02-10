import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { withLayout, LayoutProps } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Expertise from 'components/index/expertise/Expertise';
import Cases from 'components/index/cases/Cases';
import Heading from 'components/index/heading/Heading';

interface HomeProps extends LayoutProps {
  data: {
    home: GQL.ContentfulHomeConnection;
    services: GQL.ContentfulServiceConnection;
    cases: GQL.ContentfulCaseConnection;
  };
}

class HomePage extends React.Component<HomeProps> {
  render () {
    const [home] = this.props.data.home.edges;
    const services = this.props.data.services.edges;
    const cases = this.props.data.cases.edges;
    return (
      <>
        <SEO title={home.node.title} keywords={[`development`]} />
        <Heading description={home.node.description.description} />
        <Expertise items={services} />
        <Cases items={cases} />
      </>
    );
  }
}

export default withLayout(HomePage);

export const pageQuery = graphql`
  query HomeQuery {
    home: allContentfulHome {
      edges {
        node {
          id
          title
          description {
            description
          }
        }
      }
    }
    services: allContentfulService(sort: { fields: order }) {
      edges {
        node {
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
      }
    }
    cases: allContentfulCase(sort: { fields: order }) {
      edges {
        node {
          id
          title
          slug
          thumbnail {
            fluid(maxHeight: 320) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          description
        }
      }
    }
  }
`;

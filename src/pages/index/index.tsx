import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { withLayout, LayoutProps } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Expertise from 'components/_index/expertise/Expertise';
import Cases from 'components/_index/cases/Cases';
import Experts from 'components/experts/Experts';
import Heading from 'components/_index/heading/Heading';
import Contacts from 'components/contacts/Contacts';

interface HomeProps extends LayoutProps {
  data: {
    home: GQL.ContentfulHomeConnection;
    services: GQL.ContentfulServiceConnection;
    cases: GQL.ContentfulCaseConnection;
    experts: GQL.ContentfulExpertConnection;
  };
}

class HomePage extends React.Component<HomeProps> {
  render () {
    const [home] = this.props.data.home.edges;
    const services = this.props.data.services.edges;
    const cases = this.props.data.cases.edges;
    const experts = this.props.data.experts.edges;
    return (
      <>
        <SEO title={home.node.title} keywords={[`development`]} />
        <Heading description={home.node.description.description} />
        <Expertise items={services} />
        <Cases items={cases} />
        <Experts items={experts} />
        <Contacts />
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
            fluid(maxHeight: 400) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          description
        }
      }
    }
    experts: allContentfulExpert(sort: { fields: order }) {
      edges {
        node {
          id
          title
          position
          photo {
            fluid(maxWidth: 280) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

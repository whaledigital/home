import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Expertise from 'components/expertise/Expertise';
import Cases from 'components/cases/Cases';
import Experts from 'components/experts/Experts';
import Heading from 'components/heading/Heading';
import Contacts from 'components/contacts/Contacts';

interface HomeData extends LayoutData {
  cases: GQL.ContentfulCaseConnection;
  experts: GQL.ContentfulExpertConnection;
  home: GQL.ContentfulHomeConnection;
  services: GQL.ContentfulServiceConnection;
}

export interface HomeProps extends LayoutProps {
  data: HomeData;
}

const Home: React.SFC<HomeProps> = ({ data }) => {
  const [home] = data.home.edges;
  const services = data.services.edges;
  const cases = data.cases.edges;
  const experts = data.experts.edges;
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
};

export default withLayout<HomeProps>(Home);

export const pageQuery = graphql`
  query HomeQuery($lang: String) {
    ...LayoutFragment
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
    services: allContentfulService(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...ServiceFragment } }
    }
    cases: allContentfulCase(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...CaseFragment } }
    }
    experts: allContentfulExpert(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...ExpertFragment } }
    }
  }
`;

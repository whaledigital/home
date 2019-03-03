import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Expertise from 'components/expertise/Expertise';
import Cases from 'components/cases/Cases';
import Tiles from 'components/Tiles';
import Head from 'components/Head';
import Contacts from 'components/contacts/Contacts';

interface HomeData extends LayoutData {
  cases: GQL.ContentfulCaseConnection;
  tiles: GQL.ContentfulTilesConnection;
  services: GQL.ContentfulServiceConnection;
  page: GQL.ContentfulPage;
  dictionaryHome: GQL.ContentfulDictionaryConnection;
  dictionaryContacts: GQL.ContentfulDictionaryConnection;
}

export interface HomeProps extends LayoutProps {
  data: HomeData;
}

const Home: React.SFC<HomeProps> = ({ data }) => {
  const { page } = data;
  const services = data.services.edges;
  const tiles = data.tiles.edges;
  const cases = data.cases.edges;
  const dictionaryHome = getDictionary(data.dictionaryHome.edges);
  const dictionaryContacts = getDictionary(data.dictionaryContacts.edges);
  const seo = {
    description: page.pageDescription,
    keywords: page.pageKeywords,
    lang: page.node_locale,
    title: page.pageTitle,
  };
  return (
    <>
      <SEO {...seo} />
      <Head
        type="home"
        title={page.headerDescription.headerDescription}
        button={dictionaryHome.startProject}
      />
      <Expertise title={dictionaryHome.expertise} items={services} />
      <Cases title={dictionaryHome.cases} items={cases} />
      <Tiles title={dictionaryHome.clients} items={tiles} />
      <Contacts dictionary={dictionaryContacts} />
    </>
  );
};

export default withLayout<HomeProps>(Home);

export const pageQuery = graphql`
  query HomeQuery($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "home" },
      node_locale: { eq: $lang }
    ) {
      ...PageFragment
    }
    dictionaryHome: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        slug: { in: [
          "expertise",
          "cases",
          "contacts",
          "clients",
          "startProject"
        ]
      }}
    ) {
      edges { node { slug title } }
    }
    dictionaryContacts: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        category: { eq: "contacts" }
      }
    ) {
      edges { node { slug title } }
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
    tiles: allContentfulTiles(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...TilesFragment } }
    }
  }
`;

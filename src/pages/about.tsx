import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Contacts from 'components/contacts/Contacts';
import Head from 'components/Head';
import Statistics from 'components/Statistics';

interface AboutData extends LayoutData {
  page: GQL.ContentfulPage;
  statistics: GQL.ContentfulStatisticsConnection;
  dictionaryContacts: GQL.ContentfulDictionaryConnection;
}

export interface AboutProps extends LayoutProps {
  data: AboutData;
}

const AboutPage = ({ data }: AboutProps) => {
  const { page } = data;
  const seo = {
    description: page.pageDescription,
    keywords: page.pageKeywords,
    lang: page.node_locale,
    title: page.pageTitle,
  };
  const dictionaryContacts = getDictionary(data.dictionaryContacts.edges);

  return (
    <>
      <SEO {...seo} />
      <Head
        type="page"
        title={page.headerTitle}
        description={page.headerDescription.headerDescription}
      />
      <Statistics items={data.statistics.edges} />
      <Contacts dictionary={dictionaryContacts} />
    </>
  );
};

export default withLayout(AboutPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "about" },
      node_locale: { eq: $lang }
    ) {
      ...PageFragment
    }
    statistics: allContentfulStatistics(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { id title description } }
    }
    dictionaryContacts: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        category: { eq: "contacts" }
      }
    ) {
      edges { node { slug title } }
    }
  }
`;

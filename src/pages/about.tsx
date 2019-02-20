import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Segment from 'components/Segment';
import Contacts from 'components/contacts/Contacts';
import Heading from 'components/Heading';

interface AboutData extends LayoutData {
  page: GQL.ContentfulPage;
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
      <Heading
        type="page"
        title={page.headerTitle}
        description={page.headerDescription.headerDescription}
      />
      <Segment fill="dark">
        <p>description</p>
      </Segment>
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

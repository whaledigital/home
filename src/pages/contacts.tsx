import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Contacts from 'components/contacts/Contacts';

interface ContactsData extends LayoutData {
  page: GQL.ContentfulPage;
  dictionaryContacts: GQL.ContentfulDictionaryConnection;
}

export interface ContactsProps extends LayoutProps {
  data: ContactsData;
}

const ContactsPage = ({ data }: ContactsProps) => {
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
      <Contacts dictionary={dictionaryContacts} />
    </>
  );
};

export default withLayout(ContactsPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "contacts" },
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

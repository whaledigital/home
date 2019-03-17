import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Head from 'components/Head';
import Jobs from 'components/Jobs';
import FormJob from 'components/FormJob';

interface CareersData extends LayoutData {
  page: GQL.ContentfulPage;
  jobs: GQL.ContentfulJobConnection;
  dictionaryCareers: GQL.ContentfulDictionaryConnection;
  dictionaryContacts: GQL.ContentfulDictionaryConnection;
}

export interface CareersProps extends LayoutProps {
  data: CareersData;
}

const CareersPage = ({ data }: CareersProps) => {
  const { page } = data;
  const seo = {
    description: page.pageDescription,
    keywords: page.pageKeywords,
    lang: page.node_locale,
    title: page.pageTitle,
  };

  const dictionaryCareers = getDictionary(data.dictionaryCareers.edges);
  const dictionaryContacts = getDictionary(data.dictionaryContacts.edges);
  const jobs = data.jobs.edges.map(({ node }) => node);

  return (
    <>
      <SEO {...seo} />
      <Head
        type="small"
        title={page.headerTitle}
        description={page.headerDescription && page.headerDescription.headerDescription}
      />
      <Jobs items={jobs} buttonTitle={dictionaryCareers.jobDetails} />
      <FormJob dictionary={dictionaryContacts} />
    </>
  );
};

export default withLayout(CareersPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "careers" },
      node_locale: { eq: $lang }
    ) {
      ...PageFragment
    }
    dictionaryCareers: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        slug: { in: [ "jobDetails" ]
      }}
    ) {
      edges { node { slug title } }
    }
    jobs: allContentfulJob(
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...JobFragment } }
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

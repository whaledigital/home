import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Head from 'components/Head';
import Jobs from 'components/Jobs';

interface CareersData extends LayoutData {
  page: GQL.ContentfulPage;
  jobs: GQL.ContentfulJobConnection;
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

  const jobs = data.jobs.edges.map(({ node }) => node);

  return (
    <>
      <SEO {...seo} />
      <Head
        type="small"
        title={page.headerTitle}
        description={page.headerDescription && page.headerDescription.headerDescription}
      />
      <Jobs items={jobs} />
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
    jobs: allContentfulJob(
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...JobFragment } }
    }
  }
`;

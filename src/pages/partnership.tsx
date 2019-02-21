import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Head from 'components/Head';

interface PartnershipData extends LayoutData {
  page: GQL.ContentfulPage;
}

export interface PartnershipProps extends LayoutProps {
  data: PartnershipData;
}

const PartnershipPage = ({ data }: PartnershipProps) => {
  const { page } = data;
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
        type="page"
        title={page.headerTitle}
      />
    </>
  );
};

export default withLayout(PartnershipPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "partnership" },
      node_locale: { eq: $lang }
    ) {
      ...PageFragment
    }
  }
`;

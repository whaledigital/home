import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Head from 'components/Head';

interface ThankYouData extends LayoutData {
  page: GQL.ContentfulPage;
}

export interface ThankYouProps extends LayoutProps {
  data: ThankYouData;
}

const ThankYouPage = ({ data }: ThankYouProps) => {
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
        description={page.headerDescription.headerDescription}
      />
    </>
  );
};

export default withLayout(ThankYouPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "thank-you-cv" },
      node_locale: { eq: $lang }
    ) {
      ...PageFragment
    }
  }
`;

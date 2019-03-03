import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Description from 'components/Description';

interface TermsOfUseData extends LayoutData {
  page: GQL.ContentfulPage;
}

export interface TermsOfUseProps extends LayoutProps {
  data: TermsOfUseData;
}

const TermsOfUsePage = ({ data }: TermsOfUseProps) => {
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
      <Description title={page.headerTitle}>
        {page.content && page.content.childMarkdownRemark.html}
      </Description>
    </>
  );
};

export default withLayout(TermsOfUsePage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "terms-of-use" },
      node_locale: { eq: $lang }
    ) {
      ...PageFragment
    }
  }
`;

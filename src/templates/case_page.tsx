import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

import Section from 'components/Section';
import Head from 'components/Head';
import { withLayout } from 'components/layout/Layout';

const CasePage = (props: any) => {
  const { caseItem } = props.data;
  return (
    <>
      <Head
        type="page"
        title={caseItem.title}
        description={caseItem.description}
      />
      <Section fill="dark">
        <Img fixed={caseItem.thumbnail.fixed} />
      </Section>
    </>
  );
};

export default withLayout(CasePage);

export const pageQuery = graphql`
  query TemplateCase($slug: String!, $lang: String) {
    ...LayoutFragment
    caseItem: contentfulCase(slug: { eq: $slug}, node_locale: { eq: $lang}) {
      id
      title
      description
      thumbnail {
        fixed(width: 700, height: 300) {
          ...GatsbyContentfulFixed_noBase64
        }
      }
    }
  }
`;

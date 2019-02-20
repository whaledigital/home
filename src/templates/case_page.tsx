import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

import Segment from 'components/segment/Segment';
import { withLayout } from 'components/layout/Layout';

const CasePage = (props: any) => {
  const { caseItem } = props.data;
  return (
    <Segment>
      <h1>{caseItem.title}</h1>
      <div>
        <Img fixed={caseItem.thumbnail.fixed} />
        <p>{caseItem.description}</p>
      </div>
    </Segment>
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

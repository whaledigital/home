import { graphql } from 'gatsby';
import * as React from 'react';

import Head from 'components/Head';
import { withLayout } from 'components/layout/Layout';
import Case from 'components/Case';

const CasePage = (props: any) => {
  const { caseItem } = props.data;
  return (
    <>
      <Head
        type="case"
        background={caseItem.imageFull ? caseItem.imageFull[0].fluid : caseItem.thumbnail.fluid}
      />
      <Case {...caseItem} />
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
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      leadText { leadText }
      task { task }
      solution { solution }
      statistics { id title description }
      imageWeb {
        id
        fluid { ...GatsbyContentfulFluid_noBase64 }
      }
      imageFull {
        id
        fluid { ...GatsbyContentfulFluid_noBase64 }
      }
      imageMobile {
        id
        fluid { ...GatsbyContentfulFluid_noBase64 }
      }
    }
  }
`;

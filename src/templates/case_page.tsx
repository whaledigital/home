import { graphql } from 'gatsby';
import * as React from 'react';

import { getDictionary } from 'utils/dictionary';
import Head from 'components/Head';
import { withLayout } from 'components/layout/Layout';
import Case from 'components/Case';

const CasePage = (props: any) => {
  const { caseItem } = props.data;
  const dictionary = getDictionary(props.data.dictionary.edges);
  return (
    <>
      <Head
        type="case"
        background={caseItem.imageFull ? caseItem.imageFull[0].fluid : caseItem.thumbnail.fluid}
      />
      <Case {...caseItem} dictionary={dictionary} />
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
    dictionary: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        slug: { in: [
          "task",
          "solution"
        ]
      }}
    ) {
      edges { node { slug title } }
    }
  }
`;

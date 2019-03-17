import { graphql } from 'gatsby';
import * as React from 'react';

import { getDictionary } from 'utils/dictionary';
import Head from 'components/Head';
import Description from 'components/Description';
import { withLayout } from 'components/layout/Layout';
import FormJob from 'components/FormJob';

const JobPage = (props: any) => {
  const { jobItem } = props.data;
  const dictionaryContacts = getDictionary(props.data.dictionaryContacts.edges);

  return (
    <>
      <Head
        type="small"
        title={jobItem.title}
        description={[jobItem.salary, jobItem.office.title].join('\n')}
      />
      <Description>
        {jobItem.description && jobItem.description.childMarkdownRemark.html}
      </Description>
      <FormJob dictionary={dictionaryContacts} jobTitle={jobItem.title} />
    </>
  );
};

export default withLayout(JobPage);

export const pageQuery = graphql`
  query TemplateJob($slug: String!, $lang: String) {
    ...LayoutFragment
    jobItem: contentfulJob(slug: { eq: $slug}, node_locale: { eq: $lang}) {
      id
      title
      slug
      short
      salary
      office {
        title
      }
      description {
        childMarkdownRemark {
          html
        }
      }
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

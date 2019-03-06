import { graphql } from 'gatsby';
import * as React from 'react';

import Head from 'components/Head';
import Description from 'components/Description';
import { withLayout } from 'components/layout/Layout';

const JobPage = (props: any) => {
  const { jobItem } = props.data;
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
  }
`;

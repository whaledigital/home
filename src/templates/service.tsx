import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

import { ContentfulService } from 'src/graphql-types';
import Segment from 'components/segment/Segment';
import { withLayout, LayoutProps } from 'components/layout/Layout';

interface ServiceProps extends LayoutProps {
  data: {
    service: ContentfulService;
  };
}

const BlogPostPage = (props: ServiceProps) => {
  const service = props.data.service;
  return (
    <Segment inverted>
      <h1>{service.title}</h1>
      <div>
        <Img fixed={service.image.fixed} />
        <p>{service.directions.join(' / ')}</p>
      </div>
    </Segment>
  );
};

export default withLayout(BlogPostPage);

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    service: contentfulService(slug: { eq: $slug}) {
      id
      title
      image {
        fixed(width: 700, height: 300) {
          ...GatsbyContentfulFixed_noBase64
        }
      }
      directions
    }
  }
`;

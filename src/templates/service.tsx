import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import { get } from 'lodash';

import { ImageSharp } from 'src/graphql-types';
import { Segment } from 'components/segment/Segment';
import { withLayout, LayoutProps } from 'components/layout/Layout';

export interface SeviceItem {
  title: string;
  slug: string;
  directions: string[];
  image: ImageSharp;
}

interface ServiceProps extends LayoutProps {
  data: {
    service: SeviceItem;
  };
}

const BlogPostPage = (props: ServiceProps) => {
  const service = get(props, 'data.service');
  return (
    <Segment inverted>
      <h1>{service.title}</h1>
      <div>
        <Img fluid={service.image.fluid} />
        <p>{service.directions.join(' / ')}</p>
      </div>
    </Segment>
  );
};

export default withLayout(BlogPostPage);

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    service: contentfulService(slug: { eq: $slug}) {
      title
      image {
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      directions
    }
  }
`;

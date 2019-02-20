import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

import Segment from 'components/segment/Segment';
import { withLayout } from 'components/layout/Layout';
import Heading from 'components/Heading';

const ServicePage = (props: any) => {
  const { service } = props.data;
  return (
    <>
      <Heading
        type="service"
        title={service.title}
        description={service.directions && service.directions.join(' / ')}
      />
      <Segment>
        <Img fixed={service.image.fixed} />
      </Segment>
    </>
  );
};

export default withLayout(ServicePage);

export const pageQuery = graphql`
  query TemplateService($slug: String!, $lang: String) {
    ...LayoutFragment
    service: contentfulService(slug: { eq: $slug}, node_locale: { eq: $lang}) {
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

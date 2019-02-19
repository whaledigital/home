import { graphql } from 'gatsby';
import React from 'react';

import { withLayout } from 'components/layout/Layout';
import Segment from 'components/segment/Segment';
import { SEO } from 'components/seo/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About"
        keywords={[`development`]}
      />
      <Segment>
        <h1>About</h1>
      </Segment>
    </>
  );
};

export default withLayout(AboutPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
  }
`;

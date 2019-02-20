import { graphql } from 'gatsby';
import React from 'react';

import { withLayout } from 'components/layout/Layout';
import Section from 'components/Section';
import { SEO } from 'components/seo/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <Section>
      <h1>You are here!</h1>
      <p>But nothing found for you #404</p>
    </Section>
  </>
);

export default withLayout(NotFoundPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
  }
`;

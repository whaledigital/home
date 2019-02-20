import { navigate, graphql } from 'gatsby';
import React from 'react';

import { withLayout } from 'components/layout/Layout';
import Section from 'components/Section';
import Button from 'components/button/Button';
import { SEO } from 'components/seo/SEO';

const ThankYouPage = () => {
  const navigateToHome = () => navigate('/');
  return (
    <>
      <SEO title="Thank you" />
      <Section>
        <h1>Thank you</h1>
        <h2>for contacting us!</h2>
        <Button title="Go to homepage" onClick={navigateToHome} />
      </Section>
    </>
  );
};

export default withLayout(ThankYouPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
  }
`;

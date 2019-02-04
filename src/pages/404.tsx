import React from 'react';

import { withLayout } from 'components/layout/Layout';
import { Segment } from 'components/segment/Segment';
import { SEO } from 'components/seo/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <Segment inverted>
      <h1>You are here!</h1>
      <p>But nothing found for you #404</p>
    </Segment>
  </>
);

export default withLayout(NotFoundPage);

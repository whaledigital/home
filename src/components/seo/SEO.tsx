import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: [];
  keywords?: string[];
}

export const SEO = ({ description, lang, meta, keywords, title }: SEOProps) => {
  const data = useStaticQuery(SEOQuery);
  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
              content: keywords.join(`, `),
              name: `keywords`,
            }
            : [],
        )
        .concat(meta)}
    />
  );
};

SEO.defaultProps = {
  keywords: [],
  lang: 'en',
  meta: [],
};

const SEOQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

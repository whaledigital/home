import { StaticQuery, graphql } from 'gatsby';
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
  const render = (data: any) => {
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
            keywords.length > 0
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
  return (
    <StaticQuery
      query={detailsQuery}
      render={render}
    />
  );
};

SEO.defaultProps = {
  keywords: [],
  lang: `ru`,
  meta: [],
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

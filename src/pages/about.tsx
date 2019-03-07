import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import { SEO } from 'components/seo/SEO';
import Contacts from 'components/FormContacts';
import Head from 'components/Head';
import Statistics from 'components/Statistics';
import Gallery from 'components/Gallery';
import Experts from 'components/experts/Experts';

interface AboutData extends LayoutData {
  page: GQL.ContentfulPage;
  statistics: GQL.ContentfulStatisticsConnection;
  gallery: GQL.ContentfulGalleryConnection;
  dictionaryContacts: GQL.ContentfulDictionaryConnection;
  dictionaryAbout: GQL.ContentfulDictionaryConnection;
  experts: GQL.ContentfulExpertConnection;
}

export interface AboutProps extends LayoutProps {
  data: AboutData;
}

const AboutPage = ({ data }: AboutProps) => {
  const { page } = data;
  const seo = {
    description: page.pageDescription,
    keywords: page.pageKeywords,
    lang: page.node_locale,
    title: page.pageTitle,
  };
  const dictionaryContacts = getDictionary(data.dictionaryContacts.edges);
  const dictionaryAbout = getDictionary(data.dictionaryAbout.edges);
  const experts = data.experts.edges;
  const gallery = data.gallery.edges.map(({ node }) => node)[0];

  return (
    <>
      <SEO {...seo} />
      <Head
        type="page"
        title={page.headerTitle}
        description={page.headerDescription.headerDescription}
      />
      <Statistics items={data.statistics.edges} />
      <Gallery gallery={gallery} />
      <Experts title={dictionaryAbout.experts} items={experts} />
      <Contacts dictionary={dictionaryContacts} />
    </>
  );
};

export default withLayout(AboutPage);

export const pageQuery = graphql`
  query ($lang: String) {
    ...LayoutFragment
    page: contentfulPage(
      slug: { eq: "about" },
      node_locale: { eq: $lang }
    ) {
      ...PageFragment
    }
    statistics: allContentfulStatistics(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { id title description } }
    }
    gallery: allContentfulGallery(
      filter: {
        node_locale: { eq: $lang },
        slug: { eq: "office" }
      }
    ) {
      edges {
        node {
          id
          title
          media {
            id
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
    experts: allContentfulExpert(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...ExpertFragment } }
    }
    dictionaryContacts: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        category: { eq: "contacts" }
      }
    ) {
      edges { node { slug title } }
    }
    dictionaryAbout: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        slug: { in: [
          "experts",
        ]
      }}
    ) {
      edges { node { slug title } }
    }
  }
`;

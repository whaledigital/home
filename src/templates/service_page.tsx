import { graphql } from 'gatsby';
import * as React from 'react';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { LayoutData, LayoutProps, withLayout } from 'components/layout/Layout';
import Contacts from 'components/contacts/Contacts';
import Head from 'components/Head';
import ServiceSection from 'components/ServiceSection';

interface ServiceData extends LayoutData {
  service: GQL.ContentfulService;
  dictionaryService: GQL.ContentfulDictionaryConnection;
  dictionaryContacts: GQL.ContentfulDictionaryConnection;
}

export interface ServiceProps extends LayoutProps {
  data: ServiceData;
}

const ServicePage = (props: ServiceProps) => {
  const { service } = props.data;
  const dictionaryService = getDictionary(props.data.dictionaryService.edges);
  const dictionaryContacts = getDictionary(props.data.dictionaryContacts.edges);

  return (
    <>
      <Head
        type="service"
        title={service.title}
        description={service.directions && service.directions.join(' / ')}
      />
      {
        service.sections &&
        service.sections.map((section: GQL.ContentfulServiceSection, i: number) => (
          <ServiceSection
            key={section.id}
            subtitle={section.subtitle}
            title={section.title}
            description={section.description.description}
            listTitle={dictionaryService.expertiseList}
            list={section.list}
            thumbnail={section.thumbnail}
            reverse={i % 2 !== 0}
          />
        ))
      }
      <Contacts dictionary={dictionaryContacts} />
    </>
  );
};

export default withLayout(ServicePage);

export const pageQuery = graphql`
  query TemplateService($slug: String!, $lang: String) {
    ...LayoutFragment
    dictionaryService: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        slug: { in: [ "expertiseList" ]
      }}
    ) {
      edges { node { slug title } }
    }
    service: contentfulService(slug: { eq: $slug}, node_locale: { eq: $lang}) {
      id
      title
      directions
      sections {
        id
        title
        subtitle
        description {
          description
        }
        list
        thumbnail {
          fixed(width: 500, height: 500) {
            ...GatsbyContentfulFixed_noBase64
          }
        }
      }
    }
    dictionaryContacts: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        category: { eq: "contacts" }
      }
    ) {
      edges { node { slug title } }
    }
  }
`;

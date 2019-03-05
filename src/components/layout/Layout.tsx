import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import AOS from 'aos';

import GQL from 'src/graphql-types';
import { getDictionary } from 'utils/dictionary';
import { Header } from 'components/header/Header';
import Footer, { SocialLink } from 'components/footer/Footer';
import { Navigation } from 'components/navigation/Navigation';
import { LangProvider, Languages } from 'components/LangContext';

import s from './Layout.module.scss';

export interface LayoutData {
  footerOffices: GQL.ContentfulOfficeConnection;
  footerServices: GQL.ContentfulServiceConnection;
  navigationHeader: GQL.ContentfulNavigationConnection;
  navigationFooter: GQL.ContentfulNavigationConnection;
  dictionaryLayout: GQL.ContentfulDictionaryConnection;
  site: {
    siteMetadata: {
      title: string;
      socialLinks: SocialLink[];
      languages: Languages;
      mapKey: string;
    };
  };
}

export interface LayoutProps {
  data: LayoutData;
  location: { pathname: string; };
  children: React.ReactNode;
}

const Layout: React.SFC<LayoutProps> = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });

  const dictionaryLayout = getDictionary(props.data.dictionaryLayout.edges);
  return (
    <LangProvider
      pathname={props.location.pathname}
      languages={props.data.site.siteMetadata.languages}
    >
      <div className={s.wrapper}>
        <Header button={dictionaryLayout.startProject}>
          <Navigation
            pathname={props.location.pathname}
            items={props.data.navigationHeader.edges}
          />
        </Header>
        {props.children}
        <Footer
          title={props.data.site.siteMetadata.title}
          dictionary={dictionaryLayout}
          offices={props.data.footerOffices.edges}
          company={props.data.navigationFooter.edges}
          services={props.data.footerServices.edges}
          socialLinks={props.data.site.siteMetadata.socialLinks}
        />
      </div>
    </LangProvider>
  );
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  class WithLayout extends React.Component<P & LayoutProps> {
    render () {
      return (
        <Layout location={this.props.location} data={this.props.data}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  }

  return WithLayout;
};

export const expertiseQuery = graphql`
  fragment PageFragment on ContentfulPage {
    pageTitle
    pageKeywords
    pageDescription
    headerTitle
    headerDescription {
      headerDescription
    }
    content {
      childMarkdownRemark {
        html
      }
    }
    node_locale
  }
  fragment LayoutFragment on Query {
    site {
      siteMetadata {
        title
        socialLinks {
          name
          url
        }
        languages {
          langs
          defaultLangKey
        }
        mapKey
      }
    }
    dictionaryLayout: allContentfulDictionary(
      filter: {
        node_locale: { eq: $lang },
        slug: { in: [
          "startProject",
          "expertise",
          "company",
          "copyright",
          "terms"
        ]
      }}
    ) {
      edges { node { slug title } }
    }
    navigationHeader: allContentfulNavigation(
      sort: { fields: order },
      filter: {
        node_locale: { eq: $lang },
        header: { eq: true },
      }
    ) {
      edges { node { ...NavigationFragment }}
    }
    navigationFooter: allContentfulNavigation(
      sort: { fields: order },
      filter: {
        node_locale: { eq: $lang },
        footer: { eq: true },
      }
    ) {
      edges { node { ...NavigationFragment }}
    }
    footerServices: allContentfulService(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...FooterServiceFragment }}
    }
    footerOffices: allContentfulOffice(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
    ) {
      edges { node { ...FooterOfficeFragment }}
    }
  }
`;

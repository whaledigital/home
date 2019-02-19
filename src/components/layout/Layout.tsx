import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import AOS from 'aos';

import GQL from 'src/graphql-types';
import { Header } from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { Navigation } from 'components/navigation/Navigation';
import { LangProvider, Languages } from 'components/LangContext';

import s from './Layout.module.scss';

export interface LayoutData {
  footerOffices: GQL.ContentfulOfficeConnection;
  footerServices: GQL.ContentfulServiceConnection;
  navigation: GQL.ContentfulNavigationConnection;
  site: {
    siteMetadata: {
      title: string;
      socialLinks: SocialLink[];
      languages: Languages;
    };
  };
}

export interface LayoutProps {
  data: LayoutData;
  location: { pathname: string; };
  children: any;
}

export interface SocialLink {
  url: string;
  name: string;
}

const Layout: React.SFC<LayoutProps> = (props) => {
  useEffect(() => AOS.init({ duration: 1000, once: true }));

  return (
    <LangProvider
      pathname={props.location.pathname}
      languages={props.data.site.siteMetadata.languages}
    >
      <div className={s.wrapper}>
        <Header>
          <Navigation
            pathname={props.location.pathname}
            items={props.data.navigation.edges}
          />
        </Header>
        {props.children}
        <Footer
          title={props.data.site.siteMetadata.title}
          offices={props.data.footerOffices.edges}
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
      }
    }
    navigation: allContentfulNavigation(
      sort: { fields: order },
      filter: { node_locale: { eq: $lang } }
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

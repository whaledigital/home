import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import AOS from 'aos';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import GQL from 'src/graphql-types';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Navigation } from 'components/navigation/Navigation';

import s from './Layout.module.scss';

export interface LayoutProps {
  location: { pathname: string; };
  children: any;
}

export interface SocialLink {
  url: string;
  name: string;
}

const Layout: React.SFC<LayoutProps> = (props) => {
  AOS.init({ duration: 1000, once: true });

  const data: GQLData = useStaticQuery(layoutQuery);

  const { langKey, langsMenu } = getLangsMenu(data, props.location.pathname);

  return (
    <IntlProvider locale={langKey}>
      <div className={s.wrapper}>
        <Header langs={langsMenu}>
          <Navigation
            pathname={props.location.pathname}
            items={data.navigation.edges}
          />
        </Header>
        {props.children}
        <Footer
          langKey={langKey}
          title={data.site.siteMetadata.title}
          offices={data.offices.edges}
          services={data.services.edges}
          socialLinks={data.site.siteMetadata.socialLinks}
        />
      </div>
    </IntlProvider>
  );
};

export default Layout;

const layoutQuery = graphql`
  query {
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
    navigation: allContentfulNavigation(sort: { fields: order }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    services: allContentfulService(sort: { fields: order }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    offices: allContentfulOffice(sort: { fields: order }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

const getLangsMenu = (data: GQLData, pathname: string) => {
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const langsMenu = getLangs(langs, langKey, getUrlForLang(`/${langKey}/`, pathname));
  return { langKey, langsMenu };
};

interface GQLData {
  services: GQL.ContentfulServiceConnection;
  offices: GQL.ContentfulOfficeConnection;
  navigation: GQL.ContentfulNavigationConnection;
  site: {
    siteMetadata: {
      title: string;
      socialLinks: SocialLink[];
      languages: {
        langs: string[];
        defaultLangKey: string;
      };
    };
  };
}

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  class WithLayout extends React.Component<P & LayoutProps> {
    render () {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  }

  return WithLayout;
};

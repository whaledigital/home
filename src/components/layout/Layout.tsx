import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Provider } from 'react-redux';
import AOS from 'aos';

import GQL from 'src/graphql-types';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Navigation } from 'components/navigation/Navigation';
import { store } from 'src/store';

import s from './Layout.module.scss';

export interface LayoutProps {
  location: { pathname: string; };
  children: any;
}

export interface SocialLink {
  url: string;
  name: string;
}

interface GQLData {
  services: GQL.ContentfulServiceConnection;
  offices: GQL.ContentfulOfficeConnection;
  navigation: GQL.ContentfulNavigationConnection;
  site: {
    siteMetadata: {
      title: string;
      socialLinks: SocialLink[];
    };
  };
}

class Layout extends React.Component<LayoutProps> {
  componentDidMount () {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  renderLayout = (data: GQLData) => {
    return (
      <Provider store={store}>
        <div className={s.wrapper}>
          <Header>
            <Navigation
              pathname={this.props.location.pathname}
              items={data.navigation.edges}
            />
          </Header>
          {this.props.children}
          <Footer
            title={data.site.siteMetadata.title}
            offices={data.offices.edges}
            services={data.services.edges}
            socialLinks={data.site.siteMetadata.socialLinks}
          />
        </div>
      </Provider>
    );
  }

  render () {
    return (
      <StaticQuery
        query={query}
        render={this.renderLayout}
      />
    );
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        socialLinks {
          name
          url
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

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  // tslint:disable:max-classes-per-file
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

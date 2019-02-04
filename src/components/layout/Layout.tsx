import React from 'react';
import { Provider } from 'react-redux';

import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Navigation } from 'components/navigation/Navigation';
import { Devtools } from 'components/devtools/Devtools';
import { store } from 'src/store';

import s from './Layout.module.scss';

export const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about/' },
];

export interface LayoutProps {
  location: { pathname: string; };
  children: any;
}

const Layout = (props: LayoutProps) => (
  <Provider store={store}>
    <div className={s.wrapper}>
      <Header>
        <Navigation pathname={props.location.pathname} items={menuItems} />
      </Header>
      {props.children}
      <Footer />
      <Devtools />
    </div>
  </Provider>
);

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render () {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };

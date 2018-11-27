import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { H1 } from 'components/general';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>Next Boilerplate 1</title>
    </Head>
    <Header />
    <H1>{title}</H1>
    <hr />
    {children}

    <Footer>&copy; {new Date().getFullYear()}</Footer>
  </div>
);

export default Layout;

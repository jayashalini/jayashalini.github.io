import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
// import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <div>
    <Analytics />
    {/* <ScrollToTop /> */}
    <Head titleTemplate="%s | Shalinni Sivakumar" defaultTitle="Shalinni Sivakumar" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Head>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Shalinni Sivakumar's personal website.",
};

export default Main;

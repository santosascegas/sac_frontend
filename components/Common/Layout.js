import React from 'react';
import Head from 'next/head';

import Header from "./Header";
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>
        <Header neverStick={props.neverStick}/>
        {props.children}
        <Footer inicio={props.inicio} />
      </div>
</div>
  )
}
export default Layout;
import { NextPage } from 'next';
import '../styles/globals.css'
import  { AppProps } from 'next/app';
import React from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.JSX.Element) => React.JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
/*
 *  _app.js
 *  Allan Nava 2020-11-03
 *  Allan Nava 2020-11-03
 *
 *  Created by [ Allan Nava ].
 *  Updated by [ Allan Nava ]
 */
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp

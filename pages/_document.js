/*
 *  _document.js
 *  Allan Nava 2020-11-06
 *  Allan Nava 2020-11-06
 *
 *  Created by [ Allan Nava ].
 *  Updated by [ Allan Nava ]
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'
//
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

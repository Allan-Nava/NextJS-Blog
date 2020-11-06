/*
 *  layout.js
 *  Allan Nava 2020-11-03
 *  Allan Nava 2020-11-06
 *
 *  Created by [ Allan Nava ].
 *  Updated by [ Allan Nava ]
 */
///
import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

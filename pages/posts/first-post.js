/*
 *  index.js
 *  Allan Nava 2020-11-03
 *  Allan Nava 2020-11-03
 *
 *  Created by [ Allan Nava ].
 *  Updated by [ Allan Nava ]
 */
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
//
export default function FirstPost() {
    return (
        <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
        )
}

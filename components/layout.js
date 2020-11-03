/*
 *  layout.js
 *  Allan Nava 2020-11-03
 *  Allan Nava 2020-11-03
 *
 *  Created by [ Allan Nava ].
 *  Updated by [ Allan Nava ]
 */
import styles from './layout.module.css'
///
const name = 'Allan Nava';
///
export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}

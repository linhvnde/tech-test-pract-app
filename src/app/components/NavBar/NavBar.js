import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <Link className={styles.link} href={'/'}>
        Home
      </Link>
      <Link className={styles.link} href={'/about'}>
        About
      </Link>
    </div>
  );
}

import React from 'react'
import styles from '@/styles/Home.module.css'
import NavbarHead from '../elements/Navbar/Navbar'


const Layout = ({children}) => {
  return (
    <div>
        <NavbarHead />
        <div className={styles.home}>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Layout
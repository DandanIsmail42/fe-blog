import { useRouter } from 'next/router'
import React from 'react'
import styles from './index.module.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { MENU_LIST } from './constant'

const NavbarHead = () => {
  const router = useRouter()
  const handleChangePage = (path) => {
    router.push(path)
  }
  return (
    <div>
      <Navbar expand="lg" className={styles["bg-body-tertiary"]}>
      <Container fluid>
        <Navbar.Brand style={{color: 'white'}} className={styles.txt} href="/">Blogggs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <ul>
          {MENU_LIST.map((menu, index) => {
                  return <li key={index}
                  className={router.pathname === menu.path ? styles.active : ''}
                  onClick={() => handleChangePage(menu.path)}>
                    {menu.name}
                    </li>
                })}
          </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarHead
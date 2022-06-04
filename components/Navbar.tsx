import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="https://hopesphotos.com">
          Hope&apos;s Photos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="https://hopesphotos.com/gallery">Gallery</Nav.Link>
            <Nav.Link href="https://hopesphotos.com/">About</Nav.Link>
            <Nav.Link href="https://hopesphotos.com/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

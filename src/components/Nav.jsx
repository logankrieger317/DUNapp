import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function SiteNav() {
  
  return (
     
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='nav-bar-container'>
        <Navbar.Brand href="#home" className='nav-brand'>D.U.N</Navbar.Brand>
        <img src="src/assets/images/Logo.jpeg" id="nav-logo"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Tasks">View All Tasks</Nav.Link>
            <Nav.Link href="#link">Create New Task</Nav.Link>
            <NavDropdown title="Meet The Team" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Joshua Thomas </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logan Krieger </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sage Maddux </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    
  )
}
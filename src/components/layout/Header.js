import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="none" expand="md border">
      <Container>
        <Navbar.Brand >
            <Link to="/">LMS</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-4">
          <Link to="/"><i className="fa-solid fa-house"></i></Link>
            <Link to="/signup" title='Sign Up'><i className="fa-solid fa-user-pen"></i></Link>
            <Link to="/signin"><i className="fa-solid fa-right-to-bracket"></i></Link>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

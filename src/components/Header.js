import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../assets/logo.png'
import profilePic from '../assets/dummy.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary custmnav">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="customLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link as={Link} to="/layout/ProductList">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/layout/add">Add Product</Nav.Link>
              <Nav.Link as={Link} to="/layout/search">Search Products</Nav.Link>
              <div className='prfileLogged'>
                <div className='prfileimg'>
                <img src={profilePic} alt="logo" className="customLogo" />
                </div>
                <div className='prfiletxt'>
                  <h3><span>Hi </span>Arun Kumar</h3>
               
                </div>
                <div className='logout'>
                  <a href='/'>Logout</a>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
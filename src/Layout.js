import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ProductList from './components/ProductList'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


import Search from './components/Search';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
const Layout = () => {
  return (
    <>
      <section>
        <Container fluid >
          <Row>            
            <Col lg={12}>
              <Header />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container >
          <Row>
            <Col lg={12}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Layout
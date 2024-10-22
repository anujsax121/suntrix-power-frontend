import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import logo from '../assets/logo.png'


const Login = () => {
  return (
    <div className='LoginForms'>
        <Container>
            <Row className='align-items-center customLgSec'>
            <Col lg={12}>
            <div className='logininner'>
                <div className='logoSections justify-content-center'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='logininnerForm'>
                <Form className='customLoginForm formProductnew'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
   
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
   
      <Button variant="primary" type="submit" href='/layout'>
        Submit
      </Button>
    </Form>
                </div>
            </div>
           
            
            </Col>
                
            </Row>
        </Container>

    </div>
  )
}

export default Login
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import LoginService from './LoginService';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const login = (e) => {
        e.preventDefault();
        LoginService.login(user)
            .then(response => {
                console.log('User successfully logged in!', response.data);
                // Store the token or user data if needed
                console.log("respone--->", response.data.token);
                localStorage.setItem('token', response.data.token); // Example token storage

                // Redirect to product list page
             // Replace '/products' with your actual product list route
      
            })
            .catch(error => {
                console.error('Login error:', error);
                setError('Invalid username or password'); // Set error message
            });
    };

    return (
        <div className='LoginForms'>
            <Container>
                <Row className='align-items-center customLgSec'>
                    <Col lg={12}>
                        <div className='logininner'>
                            <div className='logoSections justify-content-center'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='logininnerForm'>
                                    <h3 className='text-center-login'>Login</h3>
                                {error && <div className="alert alert-danger">{error}</div>} {/* Error message display */}
                                <Form onSubmit={login} className='customLoginForm formProductnew'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            placeholder="Enter User Name"
                                            value={user.username}
                                            onChange={handleChange} // Update state on change
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={user.password}
                                            onChange={handleChange} // Update state on change
                                        />
                                    </Form.Group>
                                    <div className='btnflex'>
                                        
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <p> <a href="#">Forget Password?</a></p>
                                    </div>
                                </Form>
                                <div class="text-center pt-12 pb-12 btnflextext">
                                    <p>Don't have an account? <a href="/register" class="underline font-semibold">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;

import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import LoginService from './LoginService';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        phone: ''
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

    const handleSubmit = (e) => {
        e.preventDefault();
        LoginService.register(user)
            .then(response => {
                console.log('User successfully registered!', response.data);
                // Optionally navigate to login or home page
                navigate('/login'); // Redirect to login page after successful registration
            })
            .catch(error => {
                console.error('Registration error:', error);
                setError('Registration failed: ' + (error.response?.data?.message || 'Unknown error')); // Set error message
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
                            <h3 className='text-center-login'>Register</h3>
                                {error && <div className="alert alert-danger">{error}</div>} {/* Error message display */}
                                <Form onSubmit={handleSubmit} className='customLoginForm formProductnew'>
                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            placeholder="Enter User Name"
                                            value={user.username}
                                            onChange={handleChange} // Update state on change
                                            required // Make the field required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={user.email}
                                            onChange={handleChange} // Update state on change
                                            required // Make the field required
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
                                            required // Make the field required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phone"
                                            placeholder="Enter Phone Number"
                                            value={user.phone}
                                            onChange={handleChange} // Update state on change
                                            required // Make the field required
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </Form>
                                <div class="text-center pt-12 pb-12 btnflextext">
                                    <p>Have already an account?  <a href="/" class="underline font-semibold">Login here</a></p>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;

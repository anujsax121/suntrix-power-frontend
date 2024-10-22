import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProductList from './ProductList';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='titleWrapper mt-5 mb-5'>
                            <h2 className='titleHeading'>Search Product</h2>
                        </div>


                        <Form onSubmit={handleSearch} className='formProductnew'>
                            <Form.Group controlId="searchProduct">
                                <Form.Label>Enter Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Search for a product"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Form.Group>
                            <Button className='mt-3 addprobtn' variant="success" type="submit">
                                Search
                            </Button>
                        </Form>

                    </Col>
                </Row>


                <Row className='mt-5 newTableSearch' >
                    <Col>
                        <ProductList searchTerm={searchTerm} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Search;

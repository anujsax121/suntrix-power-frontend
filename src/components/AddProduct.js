// src/components/AddProduct.js
import React, { useState } from 'react';
import ProductService from './ProductService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productCategory: '',
    productName: '',
    rating: '',
    quality: '',
    maximumProducts: '',
    minimumProducts: '',
    createdBy: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = (e) => {
    e.preventDefault();
    ProductService.createProduct(product).then(() => {
      console.log('Product added successfully!');
    });
  };

  return (

    <Container>
      <Row>
        <Col>
          <div className='titleWrapper mt-5 mb-5'>

            <h2 className='titleHeading'>Add Product </h2>
          </div>
          <Form onSubmit={saveProduct} className='formProduct'>
            <Form.Group className="mb-3 firstColumn" controlId="productCategory">
              <Form.Label>Product Category</Form.Label>
              <Form.Control type="text" name="productCategory" placeholder="Category" value={product.productCategory} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 firstColumn" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name="productName" placeholder="Name" value={product.productName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productrating">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" name="rating" placeholder="Rating" value={product.rating} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="quality">
              <Form.Label>Quality</Form.Label>
              <Form.Control name="quality" placeholder="Quality" value={product.quality} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="maximumProducts">
              <Form.Label>Maximum Products</Form.Label>
              <Form.Control type="number" name="maximumProducts" placeholder="Max Products" value={product.maximumProducts} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="minimumProducts">
              <Form.Label>Minimum Products</Form.Label>
              <Form.Control type="number" name="minimumProducts" placeholder="Min Products" value={product.minimumProducts} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="createdBy">
              <Form.Label>Created By</Form.Label>
              <Form.Control type="text" name="createdBy" placeholder="Created By" value={product.createdBy} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phoneNumber" placeholder="Phone Number" value={product.phoneNumber} onChange={handleChange} />
            </Form.Group>


            <Button variant="success" className="addprobtn" type="submit">
               Save
            </Button>
          </Form>

        </Col>
      </Row>
    </Container>





  );
};

export default AddProduct;

// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';
import AddProduct from './AddProduct';

import { Container, Row, Table, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);



    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);


    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };


    const fetchProducts = (page = currentPage) => {
        ProductService.getProducts(page)
            .then((response) => {
                console.log(response);
                setProducts(response.data.results);
                setTotalPages(response.data.total);
                setCurrentPage(response.data.currentPage); // Ensure this matches your API response
            })
            .catch((error) => {
                console.error("There was an error fetching the product!", error);
            });
    };


    const deleteProduct = (id) => {
        ProductService.deleteProduct(id).then(() => {
            setProducts(products.filter((product) => product.id !== id));
        });
    };

    const addProduct = () => {
        fetchProducts(currentPage); // Refresh the product list
    };




    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='titleWrapper mt-5 mb-5'>

                            <h2 className='titleHeading'>Product List</h2>
                        </div>
                        {/* <AddProduct onProductAdded={addProduct} /> */}
                        <Table striped bordered hover className='mt-5 greenColorHead'>
                            <thead>
                                <tr>
                                    <th>Product Category</th>
                                    <th>Product Name</th>
                                    <th>Rating</th>
                                    <th>Quality</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(products) && products.length > 0 ? (
                                    products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.productCategory}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.rating}</td>
                                            <td>{product.quality}</td>
                                            <td>
                                                <button className='btns' onClick={() => deleteProduct(product.id)}> <i class="fa-solid fa-trash"></i> &nbsp; </button>

                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No products available</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        {/* Pagination Controls */}
                        <div className='customPaginationBtns'>
                            <button onClick={handlePrevPage} disabled={currentPage === 0}>
                                <i class="fa-solid fa-chevron-left"></i>
                            </button>
                            <span> Page {currentPage + 1} of {totalPages} </span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>



        </div>
    );


};

export default ProductList;

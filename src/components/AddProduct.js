// src/components/AddProduct.js
import React, { useState } from 'react';
import ProductService from './ProductService';

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
        <form onSubmit={saveProduct}>
            <input type="text" name="productCategory" placeholder="Category" value={product.productCategory} onChange={handleChange} />
            <input type="text" name="productName" placeholder="Name" value={product.productName} onChange={handleChange} />
            <input type="number" name="rating" placeholder="Rating" value={product.rating} onChange={handleChange} />
            <input type="number" name="quality" placeholder="Quality" value={product.quality} onChange={handleChange} />
            <input type="number" name="maximumProducts" placeholder="Max Products" value={product.maximumProducts} onChange={handleChange} />
            <input type="number" name="minimumProducts" placeholder="Min Products" value={product.minimumProducts} onChange={handleChange} />
            <input type="text" name="createdBy" placeholder="Created By" value={product.createdBy} onChange={handleChange} />
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={product.phoneNumber} onChange={handleChange} />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;

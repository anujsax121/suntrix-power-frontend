// src/components/UpdateProduct.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from './ProductService';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.getProductById(id).then((response) => {
            setProduct(response.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const updateProduct = (e) => {
        e.preventDefault();
        ProductService.updateProduct(id, product).then(() => {
            console.log('Product updated successfully!');
        });
    };

    return (
        <form onSubmit={updateProduct}>
            <input type="text" name="productCategory" placeholder="Category" value={product.productCategory} onChange={handleChange} />
            <input type="text" name="productName" placeholder="Name" value={product.productName} onChange={handleChange} />
            <input type="number" name="rating" placeholder="Rating" value={product.rating} onChange={handleChange} />
            <input type="number" name="quality" placeholder="Quality" value={product.quality} onChange={handleChange} />
            <input type="number" name="maximumProducts" placeholder="Max Products" value={product.maximumProducts} onChange={handleChange} />
            <input type="number" name="minimumProducts" placeholder="Min Products" value={product.minimumProducts} onChange={handleChange} />
            <input type="text" name="createdBy" placeholder="Created By" value={product.createdBy} onChange={handleChange} />
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={product.phoneNumber} onChange={handleChange} />
            <button type="submit">Update Product</button>
        </form>
    );
};

export default UpdateProduct;

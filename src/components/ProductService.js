// src/components/ProductService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/v1/product'; // Replace with your backend URL

class ProductService {

    // GET all products
    getProducts(page) {
        return axios.get(`${ API_URL }?page=${page}`);
    }

    // POST a new product
    createProduct(product) {
        return axios.post(API_URL, product);
    }

    // GET product by ID
    getProductById(productId) {
        return axios.get(`${API_URL}/${productId}`);
    }

    // PUT to update a product
    updateProduct(productId, product) {
        return axios.put(`${API_URL}/${productId}`, product);
    }

    // DELETE a product
    deleteProduct(productId) {
        return axios.delete(`${API_URL}/${productId}`);
    }
}

export default new ProductService();

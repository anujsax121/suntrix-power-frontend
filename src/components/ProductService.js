// src/components/ProductService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/v1/product'; // Replace with your backend URL

class ProductService {
    // Method to get the authorization token
    getAuthToken() {
        return localStorage.getItem('authToken'); // Adjust as needed for your token storage
    }

    // Function to create the headers with the token
    getHeaders() {
        const token = this.getAuthToken();
        return {
            headers: {
                Authorization: `Bearer ${token}` // Adjust based on your API's requirements
            }
        };
    }

    // GET all products
    getProducts(page) {
        return axios.get(`${API_URL}?page=${page}`, this.getHeaders());
    }

    // POST a new product
    createProduct(product) {
        return axios.post(API_URL, product, this.getHeaders());
    }

    // GET product by ID
    getProductById(productId) {
        return axios.get(`${API_URL}/${productId}`, this.getHeaders());
    }

    // PUT to update a product
    updateProduct(productId, product) {
        return axios.put(`${API_URL}/${productId}`, product, this.getHeaders());
    }

    // DELETE a product
    deleteProduct(productId) {
        return axios.delete(`${API_URL}/${productId}`, this.getHeaders());
    }
}

export default new ProductService();

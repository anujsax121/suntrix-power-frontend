// src/components/ProductService.js
import axios from 'axios';

// Dummy data
const dummyData = {
    total: 1,
    maxAllowedResultsReturned: false,
    currentPage: 0,
    totalPages: 0,
    size: 1,
    results: [
        {
            id: "12087e43-2afc-4eb2-bc2c-fc35d396715c",
            productCategory: "Solar",
            productName: "Solar Power",
            rating: 4,
            quality: 1,
            maximumProducts: 3,
            minimumProducts: 1,
            createdBy: "",
            createdDate: "2024-10-17T16:33:08.825243",
            phoneNumber: null
        }
    ]
};

class ProductService {
    // Simulate a delay to mimic API call
    async getProducts(page) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: dummyData });
            }, 1000); // 1 second delay
        });
    }

    // Simulate a delay for creating a product
    async createProduct(product) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newProduct = {
                    ...product,
                    id: new Date().toISOString() // Generate a new ID
                };
                dummyData.results.push(newProduct);
                dummyData.total += 1; // Update total count
                resolve({ data: newProduct });
            }, 1000); // 1 second delay
        });
    }

    // Simulate fetching a product by ID
    async getProductById(productId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const product = dummyData.results.find(item => item.id === productId);
                resolve({ data: product });
            }, 1000); // 1 second delay
        });
    }

    // Simulate updating a product
    async updateProduct(productId, product) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = dummyData.results.findIndex(item => item.id === productId);
                if (index !== -1) {
                    dummyData.results[index] = { ...dummyData.results[index], ...product };
                    resolve({ data: dummyData.results[index] });
                }
            }, 1000); // 1 second delay
        });
    }

    // Simulate deleting a product
    async deleteProduct(productId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = dummyData.results.findIndex(item => item.id === productId);
                if (index !== -1) {
                    dummyData.results.splice(index, 1);
                    dummyData.total -= 1; // Update total count
                    resolve({ data: {} }); // Return empty object on delete
                }
            }, 1000); // 1 second delay
        });
    }
}

export default new ProductService();

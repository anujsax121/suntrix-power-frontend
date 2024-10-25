// src/components/LoginService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

class LoginService {

    // POST a login call
    async login(user) {
        try {
            const response = await axios.post(`${API_URL}/login`, user);
            const token = response.token; // Adjust based on your response structure
            localStorage.setItem('authToken', token); // Store the token
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error; // Handle the error as needed
        }
    }

    // Register function to call the registration API
 
register(userData) {
    return axios.post(`${API_URL}/register`, userData);
}
}

export default new LoginService();

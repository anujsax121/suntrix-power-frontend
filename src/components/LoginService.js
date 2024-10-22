
// src/components/ProductService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/login';
class LoginService {

    // POST a login call
    login(user) {
        return axios.post(API_URL, user);
    }


}


export default new LoginService();
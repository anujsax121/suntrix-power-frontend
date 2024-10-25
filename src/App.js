import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Layout from './Layout';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/layout" element={<Layout />}>
                    <Route index element={<ProductList />} /> {/* Default route for /layout */}
                    <Route path="add" element={<AddProduct />} />
                    <Route path="productList" element={<ProductList />} /> {/* Ensure correct casing */}
                    <Route path="search" element={<Search />} />                    
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Layout from './Layout';
import Search from './components/Search';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/layout" element={<Layout />}>
                    <Route index element={<ProductList />} />
                    <Route path="add" element={<AddProduct />} />
                    <Route path="ProductList" element={<ProductList />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </Router>
    );
}



export default App;

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

import './App.css';

// Importing the pre-made service functions
import { getProducts, createProduct, deleteProduct } from './services/productService';


function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        syncProductsWithService();
    }, []);

    const syncProductsWithService = () => {
        getProducts().then((data) => {
            setProducts([...data].reverse());
        });
    };

    const handleAddProduct = (newProductData) => {
        const maxId = products.length > 0 ? Math.max(...products.map((p) => p.id)) : 0;

        const finalizedProduct = {
            ...newProductData,
            id: maxId + 1,
        };

        createProduct(finalizedProduct).then(() => {
            syncProductsWithService();
        });
    };

    const handleDeleteProduct = (productId) => {
        deleteProduct(productId).then(() => {
            syncProductsWithService();
        });
    };

    return (
        <div>
            <Navbar />
            <Routes>
                {/* 1. Home / Product List*/}
                <Route path="/" element={<Home products={products} onDelete={handleDeleteProduct} />} />

                {/* 2. Form page to add a product */}
                <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />} />

                {/* 3. Product Details Page*/}
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>

            <Footer />
        </div>
    );
}



export default App;
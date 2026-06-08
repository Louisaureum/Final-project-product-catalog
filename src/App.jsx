import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

import './App.css';

// Importing service functions
import { getProducts, createProduct, deleteProduct } from './services/productService';

// 1. Importing filtering functions
import { filterByCategory, filterByStatus, filterBySearch } from './utils/filters';

function App() {
    const [products, setProducts] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

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
            setProducts((currentProducts) => [finalizedProduct, ...currentProducts]);
        });
    };

    const handleDeleteProduct = (productId) => {
        deleteProduct(productId).then(() => {
            setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId));
        });
    };

    let visibleProducts = filterByCategory(products, selectedCategory);
    visibleProducts = filterByStatus(visibleProducts, selectedStatus);
    visibleProducts = filterBySearch(visibleProducts, searchTerm);

    return (
        <div className="app-shell">
            <Navbar />
            <main className="app-main">
                <Routes>
                    {/* 1. Home / Product List*/}
                    <Route path="/" element={<Home
                        products={visibleProducts}
                        onDelete={handleDeleteProduct}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />}
                    />

                    {/* 2. Form page to add a product */}
                    <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />} />

                    {/* 3. Product Details Page*/}
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}



export default App;
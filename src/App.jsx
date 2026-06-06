import {Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                {/* 1. Home / Product List*/}
                <Route path="/" element={<Home />} />

                {/* 2. Form page to add a product */}
                <Route path="/add-product" element={<AddProduct />} />

                {/* 3. Product Details Page*/}
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
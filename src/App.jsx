import { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

import './App.css';
import { getProducts, createProduct, deleteProduct } from './services/productService';
import { filterByCategory, filterByStatus, filterBySearch } from './utils/filters';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProducts().then((data) => {
      setProducts([...data].reverse());
    });
  }, []);

  const handleUpdateStatus = (productId, newStatus) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, status: newStatus } : product
      )
    );
  };

  const handleAddProduct = (newProductData) => {
    const maxId = products.length > 0 ? Math.max(...products.map((p) => p.id)) : 0;
    const finalizedProduct = { ...newProductData, id: maxId + 1 };

    createProduct(finalizedProduct).then(() => {
      setProducts((currentProducts) => [finalizedProduct, ...currentProducts]);
    });
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId).then(() => {
      setProducts((currentProducts) =>
        currentProducts.filter((product) => product.id !== productId)
      );
    });
  };

  const visibleProducts = filterBySearch(
    filterByStatus(filterByCategory(products, selectedCategory), selectedStatus),
    searchTerm
  );

  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={visibleProducts}
                onDelete={handleDeleteProduct}
                onUpdateStatus={handleUpdateStatus}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="*"
            element={
              <section className="page-panel not-found-page">
                <div className="page-heading">
                  <h1>Page not found</h1>
                  <p>The page you are looking for does not exist.</p>
                </div>
                <div className="form-actions">
                  <Link className="primary-btn" to="/">
                    Back to catalog
                  </Link>
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import ProductDetails from './pages/ProductDetails'
import { initialProducts } from './data/products'

function App() {
  const [products, setProducts] = useState(initialProducts)

  const handleAddProduct = (newProduct) => {
    const nextId = products.length ? Math.max(...products.map((product) => product.id)) + 1 : 1
    const formattedProduct = {
      id: nextId,
      title: newProduct.name,
      ...newProduct,
      price: Number(newProduct.price),
      stockStatus: newProduct.stockStatus || 'In Stock',
    }

    setProducts((currentProducts) => [formattedProduct, ...currentProducts])
  }

  const handleUpdateStock = (productId, nextStatus) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, stockStatus: nextStatus } : product,
      ),
    )
  }

  const handleDeleteProduct = (productId) => {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />} />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                products={products}
                onUpdateStock={handleUpdateStock}
                onDelete={handleDeleteProduct}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

<<<<<<< HEAD
import { useParams, Link, useNavigate } from 'react-router-dom'

function ProductDetails({ products, onUpdateStock, onDelete }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => String(item.id) === id)

  const handleToggleStock = () => {
    const nextStatus = product.stockStatus === 'In Stock' ? 'Out of Stock' : 'In Stock'
    onUpdateStock?.(product.id, nextStatus)
  }

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete ${product.name}?`)
    if (confirmed) {
      onDelete?.(product.id)
      navigate('/')
    }
  }
=======
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ProductDetails({ products = [], onUpdateStock, onDelete }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const productId = Number(id)

  const product = products.find((p) => p.id === productId)
>>>>>>> 3d166ff (Add ProductDetails page to show full product info with stock and delete actions)

  if (!product) {
    return (
      <div className="page">
<<<<<<< HEAD
        <div className="card">
          <h1>Product Not Found</h1>
          <p>The requested product could not be located.</p>
          <Link to="/" className="btn">
            Back Home
=======
        <div className="container">
          <h2>Product not found</h2>
          <p>The product you're looking for does not exist.</p>
          <Link to="/" className="btn">
            Back to products
>>>>>>> 3d166ff (Add ProductDetails page to show full product info with stock and delete actions)
          </Link>
        </div>
      </div>
    )
  }
<<<<<<< HEAD

  return (
    <div className="page">
      <div className="card details-card">
        <img src={product.image} alt={product.name} className="img" />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Status:</strong> {product.stockStatus}
        </p>
        <div className="button-row">
          <button type="button" className="btn" onClick={handleToggleStock}>
            {product.stockStatus === 'In Stock' ? 'Mark Out of Stock' : 'Mark In Stock'}
          </button>
          <button type="button" className="btn danger" onClick={handleDelete}>
            Delete Product
          </button>
        </div>
        <Link to="/" className="btn">
          Back to catalog
        </Link>
=======

  const statusFromProduct = product.stockStatus || product.status || 'In Stock'
  const STATUSES = ['In Stock', 'Low Stock', 'Out of Stock']
  const currentIndex = STATUSES.indexOf(statusFromProduct)
  const nextStatus = STATUSES[(currentIndex + 1) % STATUSES.length]

  const handleToggleStock = () => {
    if (typeof onUpdateStock === 'function') onUpdateStock(productId, nextStatus)
  }

  const handleDelete = () => {
    if (typeof onDelete === 'function') onDelete(productId)
    navigate('/')
  }

  return (
    <div className="page">
      <div className="container">
        <Link to="/" className="btn" style={{ marginBottom: 12 }}>
          ← Back
        </Link>

        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 380px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', borderRadius: 12 }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h1 style={{ marginTop: 0 }}>{product.name}</h1>

            <p style={{ margin: '8px 0', color: '#64748b' }}>{product.category}</p>

            <p style={{ fontSize: 20, fontWeight: '700', color: '#0ea5e9' }}>
              ${product.price}
            </p>

            <p style={{ margin: '12px 0' }}>{product.description}</p>

            <p>
              <strong>Status:</strong> {statusFromProduct}
            </p>

            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <button className="btn" onClick={handleToggleStock}>
                Change stock to "{nextStatus}"
              </button>

              <button
                className="btn"
                onClick={handleDelete}
                style={{ background: '#ef4444', borderColor: '#ef4444' }}
              >
                Delete product
              </button>
            </div>
          </div>
        </div>
>>>>>>> 3d166ff (Add ProductDetails page to show full product info with stock and delete actions)
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default ProductDetails;
=======
export default ProductDetails
>>>>>>> 3d166ff (Add ProductDetails page to show full product info with stock and delete actions)

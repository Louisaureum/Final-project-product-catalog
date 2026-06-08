import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ProductDetails({ products = [], onUpdateStock, onDelete }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const productId = Number(id)

  // try numeric id first, fallback to string match
  const product = products.find((p) => p.id === productId) || products.find((p) => String(p.id) === id)

  if (!product) {
    return (
      <div className="page">
        <div className="container">
          <h2>Product not found</h2>
          <p>The product you're looking for does not exist.</p>
          <Link to="/" className="btn">
            Back to products
          </Link>
        </div>
      </div>
    )
  }

  const statusFromProduct = product.stockStatus || product.status || 'In Stock'
  const STATUSES = ['In Stock', 'Low Stock', 'Out of Stock']
  const currentIndex = STATUSES.indexOf(statusFromProduct)
  const nextStatus = STATUSES[(currentIndex + 1) % STATUSES.length]

  const handleToggleStock = () => {
    if (typeof onUpdateStock === 'function') onUpdateStock(productId, nextStatus)
  }

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete ${product.name}?`)
    if (!confirmed) return
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

            {product.category && (
              <p style={{ margin: '8px 0', color: '#64748b' }}>{product.category}</p>
            )}

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
      </div>
    </div>
  )
}

export default ProductDetails

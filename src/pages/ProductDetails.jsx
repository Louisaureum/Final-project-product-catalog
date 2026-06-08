import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ProductDetails({ products = [], onUpdateStock, onDelete }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const productId = Number(id)

  const product = products?.find((p) => p.id === productId) || products.find((p) => String(p.id) === String(id))

  if (!product) {
    return (
      <div className="page">
        <div className="container">
          <div className="card details-card">
            <h2>Product not found</h2>
            <p>The product you're looking for does not exist.</p>
            <Link to="/" className="btn">
              Back to catalog
            </Link>
          </div>
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
        <div className="details-hero">
          <div>
            <Link to="/" className="btn back-btn">
              ← Back to catalog
            </Link>
            <div className="product-badge">
              <span>{product.category || 'General'}</span>
              <span className={statusFromProduct.replace(/\s+/g, '-').toLowerCase()}>
                {statusFromProduct}
              </span>
            </div>
            <h1>{product.name}</h1>
            <p className="details-summary">{product.description}</p>
            <div className="details-actions">
              <strong className="price-tag">${product.price}</strong>
              <div className="details-buttons">
                <button className="btn" onClick={handleToggleStock}>
                  Mark as {nextStatus}
                </button>
                <button className="btn delete-btn" onClick={handleDelete}>
                  Delete product
                </button>
              </div>
            </div>
          </div>

          <div className="details-image-wrap">
            <img src={product.image} alt={product.name} className="details-image" />
          </div>
        </div>

        <div className="details-card">
          <h2>Product details</h2>
          <div className="details-grid">
            <div>
              <p className="detail-label">Product ID</p>
              <p>{product.id}</p>
            </div>
            <div>
              <p className="detail-label">Category</p>
              <p>{product.category || 'General'}</p>
            </div>
            <div>
              <p className="detail-label">Price</p>
              <p>${product.price}</p>
            </div>
            <div>
              <p className="detail-label">Stock status</p>
              <p>{statusFromProduct}</p>
            </div>
            <div className="details-full">
              <p className="detail-label">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const {
    id,
    title,
    name,
    description,
    category,
    stockStatus,
    status,
    image,
    price,
  } = product || {}

  const productName = name || title || 'Untitled product'
  const productPrice = typeof price === 'number' ? `$${price.toFixed(2)}` : null
  const productStatus = stockStatus || status || 'Unknown'

  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <article className="product-card">
        {image && (
          <img
            src={image}
            alt={productName}
            className="product-card-image"
          />
        )}
        <div className="product-card-content">
          <h3>{productName}</h3>
          {(category || productStatus || productPrice) && (
            <div className="product-card-meta">
              {category && <span>{category}</span>}
              {productStatus && (
                <span className={`status-pill ${productStatus.replace(/\s+/g, '-').toLowerCase()}`}>
                  {productStatus}
                </span>
              )}
              {productPrice && <span>{productPrice}</span>}
            </div>
          )}
          {description ? (
            <p>{description}</p>
          ) : (
            <p className="product-card-placeholder">No description available.</p>
          )}
        </div>
      </article>
    </Link>
  )
}

export default ProductCard

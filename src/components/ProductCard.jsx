import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { name, description, price, category, status, image } = product || {}

  return (
    <article className="product-card">
      {image && (
        <img
          src={image}
          alt={name || 'Product image'}
          className="product-card-image"
          style={{ width: "220px", height: "250px" }}
        />
      )}
      <div className="product-card-content">
        <h3>{name || 'Unnamed product'}</h3>
        {(price || category || status) && (
          <div className="product-card-meta">
            {price && <span>{price}</span>}
            {category && <span>{category}</span>}
            {status && <span>{status}</span>}
          </div>
        )}
        {description ? (
          <p>{description}</p>
        ) : (
          <p className="product-card-placeholder">No description available.</p>
        )}

        <Link to={`/products/${product.id}`} className="details-btn">View More</Link> 
      </div>
    </article>
  )
}

export default ProductCard


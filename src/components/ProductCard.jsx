import { Link } from 'react-router-dom';

function ProductCard({ product , onDelete}) {
  const { name, description, price, category, status, image } = product || {}

  return (
    <article className="product-card">
      {image && (
        <img
          src={image}
          alt={name || 'Product image'}
          className="product-card-image"
           
        />
      )}
      <div className="product-card-content">
        <h3>{name || 'Unnamed product'}</h3>
        {(price || category || status) && (
          <div className="product-card-meta">
            {price && <span>Price: {price}</span>}
            {category && <span>Category: {category}</span>}
            {status && <span>Status: {status}</span>}
          </div>
        )}
        {description ? (
          <p>{description}</p>
        ) : (
          <p className="product-card-placeholder">No description available.</p>
        )}

        <Link to={`/products/${product.id}`} className="details-btn">View More</Link> 
      <button 
      className="delete-btn"
      onClick={() => onDelete(product.id)}>
        Delete Item?
        </button>
      </div>
    </article>
  )
}

export default ProductCard


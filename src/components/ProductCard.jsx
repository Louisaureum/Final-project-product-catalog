import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { title, description, author, category, status, image } = product || {}

  return (
    <article className="product-card">
      {image && (
        <img
          src={image}
          alt={title || 'Product image'}
          className="product-card-image"
        />
      )}
      <div className="product-card-content">
        <h3>{title || 'Untitled product'}</h3>
        {(author || category || status) && (
          <div className="product-card-meta">
            {author && <span>{author}</span>}
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


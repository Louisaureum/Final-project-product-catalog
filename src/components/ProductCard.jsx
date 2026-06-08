import { Link } from 'react-router-dom';

function ProductCard({ product, onDelete, onUpdateStatus }) {
  const { id, name, description, price, category, status, image } = product || {};
  const statusClass = status ? status.toLowerCase().replace(/\s+/g, '-') : 'in-stock';

  return (
    <article className="product-card">
      {image ? (
        <img
          src={image}
          alt={name || 'Product image'}
          className="product-card-image"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="product-card-image product-card-placeholder">No image available</div>
      )}

      <div className="product-card-content">
        <h3>{name || 'Unnamed product'}</h3>

        {((price !== undefined && price !== null) || category || status) && (
          <div className="product-card-meta">
            {price !== undefined && price !== null && <span>Price: Ksh {price}</span>}
            {category && <span>{category}</span>}
            {status && <span>{status}</span>}
          </div>
        )}

        {description ? (
          <p>{description}</p>
        ) : (
          <p className="product-card-placeholder">No description available.</p>
        )}

        {onUpdateStatus && (
          <div className="card-status">
            <label htmlFor={`status-${id}`}>Stock status</label>
            <select
              id={`status-${id}`}
              className={`status-selector ${statusClass}`}
              value={status || 'In Stock'}
              onChange={(e) => onUpdateStatus(id, e.target.value)}
            >
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        )}

        <div className="card-actions">
          <Link to={`/products/${id}`} className="details-btn">
            View Details
          </Link>
          <button type="button" className="delete-btn" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

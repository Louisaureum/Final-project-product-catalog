import { Link } from 'react-router-dom';

function ProductCard({ product, onDelete, onUpdateStatus }) {
  const { name, description, price, category, status, image } = product || {}
  return (
    <div className="card">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="img" />
      </div>

      <div >
        <h3>{product.name}</h3>
        <p >{product.description}</p>
        <span>${product.price}</span>

        <div className="card-status">
          <label htmlFor={`status-${product.id}`}>Stock Status:</label>
          <select
            id={`status-${product.id}`}
            value={product.status}
           className={`status-selector ${(product.status?.toLowerCase() || 'in-stock').replace(/\s+/g, '-')}`}
            onChange={(e) => onUpdateStatus(product.id, e.target.value)}>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <div>
          <Link to={`/product/${product.id}`} className="btn">
            View Details
          </Link>

          <button
            className="btn"
            onClick={() => onDelete(product.id)}>
            Delete Item?
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;

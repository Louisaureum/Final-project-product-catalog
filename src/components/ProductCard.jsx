import { Link }import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} className="img" />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
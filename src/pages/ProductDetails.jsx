<<<<<<< Updated upstream
import { useParams } from "react-router-dom";
=======
import { useParams, Link } from 'react-router-dom'
>>>>>>> Stashed changes

function ProductDetails({ products }) {
  const { id } = useParams()
  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    return (
      <div className="page">
        <div className="card">
          <h1>Product Not Found</h1>
          <p>The requested product could not be located.</p>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </div>
    )
  }

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
        <Link to="/" className="btn">
          Back to catalog
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails;

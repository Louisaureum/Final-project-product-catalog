import { useParams, Link, useNavigate } from 'react-router-dom'

function ProductDetails({ products, onUpdateStock, onDelete }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => String(item.id) === id)

  const handleToggleStock = () => {
    const nextStatus = product.stockStatus === 'In Stock' ? 'Out of Stock' : 'In Stock'
    onUpdateStock?.(product.id, nextStatus)
  }

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete ${product.name}?`)
    if (confirmed) {
      onDelete?.(product.id)
      navigate('/')
    }
  }

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
        <div className="button-row">
          <button type="button" className="btn" onClick={handleToggleStock}>
            {product.stockStatus === 'In Stock' ? 'Mark Out of Stock' : 'Mark In Stock'}
          </button>
          <button type="button" className="btn danger" onClick={handleDelete}>
            Delete Product
          </button>
        </div>
        <Link to="/" className="btn">
          Back to catalog
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails;

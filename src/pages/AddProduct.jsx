import { useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

function AddProduct({ onAddProduct }) {
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    onAddProduct?.(values)
    navigate('/')
  }

  return (
    <div className="page">
      <div className="card form-card">
        <h2>Add Product ✨</h2>

        <ProductForm onSubmit={handleSubmit} submitLabel="Add Product" />
      </div>
    </div>
  )
}

export default AddProduct;

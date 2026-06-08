import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct({ onAddProduct }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    stockStatus: 'In Stock',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.price) {
      window.alert('Please provide a product name and price.')
      return
    }

    onAddProduct?.(form)
    setForm({ name: '', price: '', image: '', description: '', category: '', stockStatus: 'In Stock' })
    navigate('/')
  }

  return (
    <div className="page">
      <div className="card form-card">
        <h2>Add Product ✨</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
          <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
          <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
          <select name="stockStatus" value={form.stockStatus} onChange={handleChange}>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
          <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

          <button className="btn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct;

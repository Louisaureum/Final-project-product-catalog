import { useState } from 'react'

function AddProduct({ onAddProduct }) {
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

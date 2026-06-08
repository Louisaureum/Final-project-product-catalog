import { useEffect, useState } from 'react'

const initialModel = {
  name: '',
  price: '',
  image: '',
  description: '',
  category: '',
  stockStatus: 'In Stock',
}

function ProductForm({ initialValues = initialModel, onSubmit, submitLabel = 'Save Product' }) {
  const [form, setForm] = useState(initialValues)

  useEffect(() => {
    setForm(initialValues)
  }, [initialValues])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.price.trim()) {
      window.alert('Please provide a product name and price.')
      return
    }

    onSubmit?.({
      ...form,
      name: form.name.trim(),
      price: form.price.trim(),
      category: form.category.trim(),
      image: form.image.trim(),
      description: form.description.trim(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <label>
        Product Name
        <input
          name="name"
          placeholder="Enter product name"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Price
        <input
          name="price"
          placeholder="Enter price"
          value={form.price}
          onChange={handleChange}
        />
      </label>

      <label>
        Image URL
        <input
          name="image"
          placeholder="https://example.com/image.jpg"
          value={form.image}
          onChange={handleChange}
        />
      </label>

      <label>
        Category
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
      </label>

      <label>
        Stock Status
        <select name="stockStatus" value={form.stockStatus} onChange={handleChange}>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </label>

      <label>
        Description
        <textarea
          name="description"
          placeholder="Enter a short description"
          value={form.description}
          onChange={handleChange}
        />
      </label>

      <button className="btn" type="submit">
        {submitLabel}
      </button>
    </form>
  )
}

export default ProductForm

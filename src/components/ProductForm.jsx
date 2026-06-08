import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductForm({ onAddProduct }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Electronics',
    price: '',
    status: 'In Stock',
    image: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === 'price' ? Number(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.category || !formData.price || !formData.status) {
      return;
    }

    onAddProduct(formData);
    navigate('/');
  };

  return (
    <section className="page-panel form-page">
      <div className="page-heading">
        <h1>Add New Product</h1>
        <p>Fill in the details below to add a new item to the catalog.</p>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="product-name">Product Name</label>
          <input
            id="product-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="product-category">Category</label>
          <select
            id="product-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Electronics">Electronics</option>
            <option value="Home">Home</option>
            <option value="Fashion">Fashion</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="product-price">Price (Ksh)</label>
          <input
            id="product-price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="product-status">Stock Status</label>
          <select
            id="product-status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="product-image">Image URL</label>
          <input
            id="product-image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-field">
          <label htmlFor="product-description">Description</label>
          <textarea
            id="product-description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-btn">
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;

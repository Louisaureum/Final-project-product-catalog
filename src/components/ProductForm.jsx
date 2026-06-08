import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductForm({ onAddProduct }) {
  const navigate = useNavigate();

  // A single state object keeps form management clean
  const [formData, setFormData] = useState({
    name: '',
    category: 'Electronics', 
    price: '',
    status: 'In Stock',     
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.category || !formData.price || !formData.status) return;

  onAddProduct(formData); 
  navigate('/'); // Navigate back home after submission
};

  return (
    <section className="page-panel form-page">
      <div className="page-heading">
        <h1>Add New Product</h1>
        <p>Fill in the new product details and submit to add it to the catalog.</p>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="product-name">Product Name</label>
          <input id="product-name" type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label htmlFor="product-category">Category</label>
          <select id="product-category" name="category" value={formData.category} onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Home">Home</option>
            <option value="Fashion">Fashion</option>
            <option value="Books">Books</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="product-price">Price (Ksh)</label>
          <input id="product-price" type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>

        <div className="form-field">
          <label htmlFor="product-status">Stock Status</label>
          <select id="product-status" name="status" value={formData.status} onChange={handleChange}>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="product-image">Image URL</label>
          <input id="product-image" type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://images.vexels.com/media/users/3/146452/isolated/preview/ff1dff030e21fb04a43b2303f3d75ec2-open-cardboard-box-icon.png?w=360" />
        </div>

        <div className="form-field">
          <label htmlFor="product-description">Description</label>
          <textarea id="product-description" name="description" value={formData.description} onChange={handleChange} rows="5" />
        </div>

        <div className="form-actions">
          <button className="primary-btn" type="submit">Add Product</button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
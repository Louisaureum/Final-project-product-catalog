import { useState } from 'react';
import { useNavigate } from 'react-router';

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
    alert("Product submitted ✨");
    onAddProduct(formData);
    navigate('/'); // Navigate back home after submission
  };

  return (
    <div className="form-wrapper">
      <h3 className="form-title">Add New Product</h3>
      <form onSubmit={handleSubmit} className="product-form">

        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange} required >
            <option value="Electronics">Electronics</option>
           <option value="Home">Home</option>
            <option value="Fashion">Fashion</option>
            <option value="Books">Books</option>
           
          </select>
        </div>

        <div className="form-group">
          <label>Price ($):</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Stock Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://img.magnific.com/free-vector/sticker-empty-box-opened-white-background_1308-68243.jpg?semt=ais_hybrid&w=740&q=80" />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" />
        </div>

        <button type="submit" className="form-submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;

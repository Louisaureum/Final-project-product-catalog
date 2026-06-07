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

  onAddProduct(formData); 
  navigate('/'); // Navigate back home after submission
};

  return (
    <div>
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label >Product Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </div>

        <div>
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Home">Home</option>
             <option value="Fashion">Fashion</option>
              <option value="Books">Books</option>
          </select>
        </div>

        <div>
          <label >Price(Ksh):</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>

        <div>
          <label>Stock Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <div>
          <label>Image URL:</label>
          <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://images.vexels.com/media/users/3/146452/isolated/preview/ff1dff030e21fb04a43b2303f3d75ec2-open-cardboard-box-icon.png?w=360" />
        </div>

        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4"/>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
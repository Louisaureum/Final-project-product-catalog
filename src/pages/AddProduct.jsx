import { useState } from "react";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product submitted ✨ (demo mode)");
    console.log(form);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Add Product ✨</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="price" placeholder="Price" onChange={handleChange} />
          <input name="image" placeholder="Image URL" onChange={handleChange} />
          <textarea name="description" placeholder="Description" onChange={handleChange} />

          <button className="btn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
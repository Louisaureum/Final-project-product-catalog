function Navbar({ title = 'Product Catalog' }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{title}</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/add-product">Add Product</a></li>
      </ul>
    </nav>
  )

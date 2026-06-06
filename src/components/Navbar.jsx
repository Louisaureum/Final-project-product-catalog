function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand voltify-logo">
        <span className="voltify-glow">⚡ Voltify</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/add-product">Add Product</a></li>
      </ul>
    </nav>
  )
}
export default Navbar

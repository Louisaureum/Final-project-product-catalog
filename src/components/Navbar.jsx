import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand voltify-logo">
        <span className="voltify-glow">⚡ Voltify</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-product" className={({ isActive }) => (isActive ? 'active' : '')}>
            Add Product
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar

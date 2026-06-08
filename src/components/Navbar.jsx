import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand voltify-logo">
        <span className="voltify-glow">?Voltify?</span>
      </div>
      <nav className="navbar-nav" aria-label="Primary navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/add-product"
          className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
        >
          Add Product
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

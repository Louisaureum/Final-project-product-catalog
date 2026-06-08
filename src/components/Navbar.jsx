import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-brand voltify-logo">
                <span className="voltify-glow">⚡Voltify⚡</span>
            </div>
            <nav className="navbar-nav" aria-label="Primary navigation">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/add-product">Add Product</Link>
            </nav>
        </header>
    );
}

export default Navbar;

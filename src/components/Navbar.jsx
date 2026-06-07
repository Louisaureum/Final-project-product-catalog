import { Link } from 'react-router';

function Navbar() {
    return (
        <div className="navbar-brand voltify-logo">
            <nav style={{ display: 'flex', gap: '12px', paddingBottom: '15px' }}>
                <span className="voltify-glow">⚡Voltify⚡</span>

                <button className='navbar-links'><Link to="/">Home</Link></button>
                <button className='navbar-links'><Link to="/add-product">Add Product</Link></button>
            </nav>
        </div>
    );
}

export default Navbar;

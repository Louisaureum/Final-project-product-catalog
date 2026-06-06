import { Link } from 'react-router';

function Navbar() {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '12px', paddingBottom: '15px' }}>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/add-product">Add Product</Link></button>
            </nav>
        </div>
    );
}

export default Navbar;


import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div>
            <Link to={`/products/${product.id}`} className="details-btn">View More</Link>
        </div>

    )
}
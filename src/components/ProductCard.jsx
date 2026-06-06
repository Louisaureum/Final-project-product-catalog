import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div>
            <p>This is a card</p>
            {/* <Link to={`/products/${product.id}`} className="details-btn">View More</Link> */}
        </div>

    )
}

export default ProductCard;
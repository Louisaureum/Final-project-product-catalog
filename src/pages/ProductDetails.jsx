import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    return (
        <div className="product-details-page">
            <h2>Product Details</h2>
            <p>Now showing details for Product ID: {id}</p>
            {/*use this 'id' to fetch data for a specific item*/}
        </div>
    );
}

export default ProductDetails;
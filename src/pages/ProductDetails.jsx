import { useParams } from "react-router-dom";

function ProductDetails({products}) {

  let id = products.id ;
  id = useParams();

  return (
    <div className="page">
      <div className="card">
        <h1>ClickHaus Product ✨</h1>
        <p>Product ID: {id}</p>
        <p>This page will later show full product info.</p>
      </div>
    </div>
  );
}

export default ProductDetails;
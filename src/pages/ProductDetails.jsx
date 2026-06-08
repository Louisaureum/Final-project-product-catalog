import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id).then((data) => {
      setProduct(data || null);
      setLoading(false);
    });
  }, [id]);

  const renderContent = () => {
    if (loading) {
      return <div className="details-card">Loading product details...</div>;
    }

    if (!product) {
      return (
        <div className="details-card">
          <p className="details-label">Product not found</p>
          <p className="details-note">
            The item you are looking for does not exist or may have been removed.
          </p>
        </div>
      );
    }

    return (
      <article className="details-card product-details-card">
        {product.image && (
          <img
            className="details-image"
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
        )}

        <div className="details-content">
          <div className="details-meta">
            <span className="details-badge">{product.category}</span>
            <span className={`details-status ${product.status?.replace(/\s+/g, '-').toLowerCase()}`}>
              {product.status}
            </span>
          </div>

          <h2>{product.name}</h2>
          <p className="details-description">{product.description}</p>

          <div className="details-grid">
            <div>
              <p className="details-label">Price</p>
              <p className="details-value">Ksh {product.price}</p>
            </div>
            <div>
              <p className="details-label">Product ID</p>
              <p className="details-value">{product.id}</p>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="page-panel product-details-page">
      <div className="page-heading">
        <h1>Product Details</h1>
        <p>View the selected product details and return to the catalog anytime.</p>
      </div>

      {renderContent()}

      <div className="details-footer">
        <Link className="primary-btn" to="/">
          Back to catalog
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;

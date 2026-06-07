function ProductDetails() {
  return (
    <div className="details-page">
      <div className="details-container">

        <div className="details-image">
          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
            alt="phone"
          />
        </div>

        <div className="details-info">
          <span className="product-badge">
            Premium Smartphone
          </span>

          <h1>iPhone 16 Pro</h1>

          <h2>$1599</h2>

          <p>
            Experience flagship performance,
            incredible battery life and
            industry-leading cameras.
          </p>

          <button className="buy-btn">
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
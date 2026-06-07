import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div style={{ position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          className="img"
        />

        {/* subtle overlay glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "12px",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          }}
        />
      </div>

      <div style={{ paddingTop: "10px" }}>
        <h3 style={{ margin: "8px 0" }}>{product.name}</h3>

        <p style={{ fontSize: "13px", opacity: 0.8 }}>
          {product.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <span style={{ fontWeight: "bold", color: "#38bdf8" }}>
            ${product.price}
          </span>

          <Link to={`/product/${product.id}`} className="btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
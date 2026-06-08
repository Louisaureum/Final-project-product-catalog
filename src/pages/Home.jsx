<<<<<<< Updated upstream
import ProductCard from "../components/ProductCard.jsx";
=======
import ProductCard from '../components/ProductCard.jsx'
>>>>>>> Stashed changes

function Home({ products = [] }) {
  return (
    <div className="page">
      <div className="container">
        <h1>ClickHaus ✨</h1>

        {products.length ? (
          <div className="grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No products available right now.</p>
        )}
      </div>
    </div>
  )
}

export default Home;

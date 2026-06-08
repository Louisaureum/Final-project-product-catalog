import ProductCard from '../components/ProductCard.jsx'

function Home({ products = [] }) {
  return (
    <div className="page">
      <div className="container">
        <h1>ClickHaus ✨</h1>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
          {products.length} products available
        </p>

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

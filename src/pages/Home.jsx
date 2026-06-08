import ProductList from '../components/ProductList'

function Home({ products = [] }) {
  return (
    <div className="page">
      <div className="container">
        <h1>ClickHaus ✨</h1>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
          {products.length} products available
        </p>

        <ProductList products={products} />
      </div>
    </div>
  )
}

export default Home;

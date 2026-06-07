import ProductCard from './ProductCard'

function ProductList({ products = [] }) {
  if (!products || products.length === 0) {
    return <div className="product-grid empty-state">No products available yet.</div>
  }

  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={product.id ?? index} product={product} />
      ))}
    </section>
  )
}

export default ProductList

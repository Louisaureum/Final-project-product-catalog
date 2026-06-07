import ProductCard from './ProductCard'

function ProductList({ products = [] , onDelete}) {
  if (!products || products.length === 0) {
    return <div className="product-grid empty-state">No products available yet.</div>
  }

  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={product.id ?? index} product={product} onDelete={onDelete}/>
      ))}
    </section>
  )
}

export default ProductList

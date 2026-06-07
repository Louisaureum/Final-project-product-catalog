import ProductList from '../components/ProductList';

function Home({products}) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
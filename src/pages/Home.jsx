import ProductList from '../components/ProductList';

function Home({products, onDelete}) {
  return (
    <div>
      <ProductList products={products} onDelete= {onDelete}/>
    </div>
  );
}

export default Home;
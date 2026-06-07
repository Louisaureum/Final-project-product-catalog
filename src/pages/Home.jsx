import ProductList from '../components/ProductList';
import { products } from '../data/products';

function Home() {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
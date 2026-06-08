import ProductList from '../components/ProductList';
import FilterBar from '../components/ProductFilter';
function Home({
  products,
  onDelete,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus }) {

  return (
    <div>
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <ProductList products={products} onDelete={onDelete} />
    </div>
  );
}

export default Home;
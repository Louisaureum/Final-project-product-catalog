import ProductList from '../components/ProductList';
import FilterBar from '../components/ProductFilter';
function Home({
  products,
  onDelete,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  searchTerm,
  setSearchTerm,
}) {

  return (
    <section className="page-panel home-page">
      <div className="page-heading">
        <h1>Browse Products</h1>
        <p>Search, filter, and manage your product catalog instantly.</p>
      </div>

      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProductList products={products} onDelete={onDelete} />
    </section>
  );
}

export default Home;
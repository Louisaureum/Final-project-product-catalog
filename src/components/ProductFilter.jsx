function FilterBar({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedStatus, 
  setSelectedStatus 
}) {
  return (
    <div className="filter-bar">
      <div>
        <label htmlFor="category-select">Category:</label>
        <select 
          id="category-select"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Home">Home</option>
          <option value="Fashion">Fashion</option>
          <option value="Books">Books</option>
        </select>
      </div>

      <div>
        <label htmlFor="status-select">Status:</label>
        <select 
          id="status-select"
          value={selectedStatus} 
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
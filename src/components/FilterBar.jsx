const FilterBar = ({ categories, selectedCategory, onCategoryChange, onSort }) => (
  <div className="d-flex justify-content-between mb-3 flex-wrap gap-2">
    <select
      className="form-select w-auto"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>

    <select className="form-select w-auto" onChange={(e) => onSort(e.target.value)}>
      <option value="">Sort by</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
      <option value="ratingHighLow">Rating: High to Low</option>
    </select>
  </div>
);

export default FilterBar;

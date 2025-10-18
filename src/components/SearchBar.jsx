const SearchBar = ({ searchTerm, onSearch }) => (
  <input
    type="text"
    className="form-control mb-3"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;

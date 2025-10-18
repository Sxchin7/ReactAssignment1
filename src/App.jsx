import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import { products as productData } from "./data/products";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortedProducts, setSortedProducts] = useState(productData);

  const categories = [...new Set(productData.map((p) => p.category))];

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
  };

  const handleSort = (option) => {
    let sorted = [...sortedProducts];
    if (option === "priceLowHigh") sorted.sort((a, b) => a.price - b.price);
    if (option === "priceHighLow") sorted.sort((a, b) => b.price - a.price);
    if (option === "ratingHighLow") sorted.sort((a, b) => b.rating - a.rating);
    setSortedProducts(sorted);
  };

  const filteredProducts = sortedProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || p.category === selectedCategory)
  );

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSort={handleSort}
        />
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default App;

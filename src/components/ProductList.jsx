import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => (
  <div className="d-flex flex-wrap gap-3 justify-content-center">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductList;

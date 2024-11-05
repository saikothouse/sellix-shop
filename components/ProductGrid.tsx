import ProductCard from './ProductCard';
import { Product } from '../utils/types'; // Import the Product type

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.uniqid} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

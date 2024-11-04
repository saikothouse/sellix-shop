import ProductCard from './ProductCard';

interface Product {
  uniqid: string;
  title: string;
  description: string;
  image_url: string;
  sellix_payment_link: string;
}

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

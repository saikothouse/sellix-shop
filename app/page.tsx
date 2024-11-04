import { fetchProducts } from '../utils/sellixApi';
import ProductGrid from '../components/ProductGrid';

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div>
      <SearchBar />
      <ProductGrid products={products} />
    </div>
  );
}

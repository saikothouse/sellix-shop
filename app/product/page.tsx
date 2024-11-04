import { useSearchParams } from 'next/navigation';

export default function ProductPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  // Fetch product details using productId
  // Display product details

  return <div>Product Details for {productId}</div>;
}

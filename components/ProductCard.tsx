import Link from 'next/link';

interface Product {
  uniqid: string;
  title: string;
  description: string;
  image_url: string;
  sellix_payment_link: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product?id=${product.uniqid}`}>
        <a className="block">
          <img src={product.image_url} alt={product.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <h2 className="text-lg font-semibold text-blue-600">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
        </a>
      </Link>
      <Link href={product.sellix_payment_link}>
        <a className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Buy Now
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;

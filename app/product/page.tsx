'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchProductById } from '../../utils/sellixApi';

const ProductPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (productId) {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
      }
    };
    loadProduct();
  }, [productId]);

  return (
    <div className="container mx-auto px-4 py-8">
      {product ? (
        <div>
          <img src={product.image_url} alt={product.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">${product.price / 100}</p>
          <button
            onClick={() => {
              const cart = JSON.parse(localStorage.getItem('cart') || '[]');
              cart.push(product);
              localStorage.setItem('cart', JSON.stringify(cart));
              alert('Product added to cart!');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductPage;

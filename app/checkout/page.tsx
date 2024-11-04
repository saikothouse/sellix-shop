'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { createOrder } from '../../utils/sellixPayment';
import { fetchProductById } from '../../utils/sellixApi';

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadProduct = async () => {
      if (productId) {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
      }
    };
    loadProduct();
  }, [productId]);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      if (product) {
        const order = await createOrder({
          title: product.title,
          value: product.price,
          currency: 'USD',
          email: email,
        });
        window.location.href = order.invoice_url;
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {product ? (
        <div>
          <h2 className="text-lg mb-2">{product.title}</h2>
          <p className="mb-4">${product.price / 100}</p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default CheckoutPage;

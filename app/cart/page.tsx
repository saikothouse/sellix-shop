'use client';

import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Clear Cart
            </button>
            <Link href="/checkout">
              <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Proceed to Checkout
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

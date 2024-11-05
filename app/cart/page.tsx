'use client';

import { useState, useEffect } from 'react';
import CartItem from '../../components/CartItem';

interface CartItemType {
  uniqid: string;
  title: string;
  price: number;
  image_url: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]); // Specify the type here

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCartItems);
  }, []);

  const removeItem = (id: string) => {
    const updatedCartItems = cartItems.filter(item => item.uniqid !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem key={item.uniqid} item={item} removeItem={removeItem} />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

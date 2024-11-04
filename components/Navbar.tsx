import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">My E-commerce Shop</a>
        </Link>
        <div>
          <Link href="/cart">
            <a className="mr-4">Cart</a>
          </Link>
          <Link href="/checkout">
            <a>Checkout</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

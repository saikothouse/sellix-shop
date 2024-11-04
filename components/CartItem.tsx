interface CartItemProps {
  item: {
    uniqid: string;
    title: string;
    price: number;
    image_url: string;
  };
  removeItem: (id: string) => void;
}

const CartItem = ({ item, removeItem }: CartItemProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <div className="flex items-center">
        <img src={item.image_url} alt={item.title} className="w-16 h-16 object-cover mr-4 rounded-lg" />
        <div className="flex-grow">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p>${item.price / 100}</p>
        </div>
        <button
          onClick={() => removeItem(item.uniqid)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

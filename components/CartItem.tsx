interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    quantity: number;
  };
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-bold">{item.title}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${(item.price / 100).toFixed(2)}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

interface CartItemProps {
  item: any;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex justify-between items-center mb-4">
      <div>
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-700">${item.price / 100}</p>
      </div>
      <button
        onClick={() => onRemove(item.uniqid)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

import { FormatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

interface OrderContentProps {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
}

export default function OrderContents({
  order,
  removeItem,
}: OrderContentProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center ">Consumo</h2>

      <div className="space-y-2 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-300 py-2 last-of-type:border-b"
          >
            <div>
              {" "}
              <p className="text-lg">
                {item.name} - {FormatCurrency(item.price)}
              </p>
              <p className="font-bold">
                Cantidad: {item.quantity} | Subtotal:{" "}
                {FormatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 h-8 w-8 rounded-full text-white font-bold"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { OrderItemT, ServiceItemT } from "../types";

type OrderContentsProps = {
  order: OrderItemT[];
  removeItem: (id: ServiceItemT["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Presupuesto <span className="text-lg">(25€/h)</span></h2>

      <div className="space-y-3 mt-10 ">
        {order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-4 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {item.price}h
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - {item.quantity * item.price * 25}€
                </p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 h-6 w-6 rounded-full text-xs text-white font-bold"
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

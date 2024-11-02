import { useState } from "react";
import type { OrderItemT, ServiceItemT } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItemT[]>([]);
  const [difficult, setDifficult] = useState(0)

  const addItem = (item: ServiceItemT) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: ServiceItemT["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const resetOrder = () => {
    setOrder([])
    setDifficult(0)

  }

  return {
    order,
    difficult,
    setDifficult,
    addItem,
    removeItem,
    resetOrder
  };
}

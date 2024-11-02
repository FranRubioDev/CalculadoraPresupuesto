import { useMemo } from "react"
import { OrderItemT } from "../types"

type OrderTotalsProps = {
  order: OrderItemT[],
  difficult: number,
  resetOrder: () => void

}


export default function OrderTotals({order, difficult, resetOrder} : OrderTotalsProps) {

  const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price * 20), 0 ) , [order])

  const difficultAmount = useMemo( () => subtotalAmount * difficult, [difficult, order]  )

  const totalAmount = useMemo( () => subtotalAmount + difficultAmount, [difficult, order]  )



  return (
  <>
  
  <div className="space-y-3">
    <h2 className="font-black text-2xl">Total</h2>

    <p>Subtotal: {""}
      <span className="font-bold">{subtotalAmount}€</span>
    </p>

    <p>Dificultad: {""}
      <span className="font-bold">{difficultAmount}€</span>
    </p>


    <p>Total: {""}
      <span className="font-bold">{totalAmount}€</span>
    </p>

  </div>
  
  <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-20 hover:bg-gray-900 rounded"
  disabled={totalAmount === 0}
  onClick={resetOrder}
  
  >
    Reset
  </button>
  
  </>
   
  )
}

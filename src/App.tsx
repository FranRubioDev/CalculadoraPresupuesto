import OrderContents from "./components/OrderContents";
import ServiceItem from "./components/ServiceItem";
import { serviceItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderTotals from "./components/OrderTotals";
import DifficultForm from "./components/DifficultForm";

function App() {
  const { order, addItem, removeItem, difficult, setDifficult, resetOrder } = useOrder();

  return (
    <>
      <header className=" bg-rose-500 py-5 text-white ">
        <h1 className="text-center text-4xl font-black">
          Calculadora Presupuesto
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-16 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Servicios</h2>

          <div className="space-y-3 mt-10">
            {serviceItems.map((item) => (
              <ServiceItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>


        <div className="border border-dashed border-black p-5 rounded-lg space-y-7 shadow-lg shadow-gray-500/20">

{order.length > 0 ?  (
  <>
  
  <OrderContents
            order={order}
            removeItem={removeItem}
            />

            <DifficultForm
            setDifficult={setDifficult}
            difficult={difficult}

            />

            <OrderTotals
            order={order}
            difficult={difficult}
            resetOrder={resetOrder}
            />
 
  </>


) : (
  <p className="text-center"> Aún no hay selección</p>

)}


        </div>

      </main>
    </>
  );
}

export default App;

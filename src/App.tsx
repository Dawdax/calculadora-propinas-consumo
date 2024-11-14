import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/use-order";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-700 py-5">
        <h1 className="text-center text-3xl font-medium">
          Calculadora de propinas y consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-2xl font-bold text-center">Menú</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map((item) => (
              <MenuItem addItem={addItem} key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="border border-dashed  border-slate-300 p-5 rounded-lg space-y-2">
          {order.length > 0 ? (
            <>
              <OrderContents removeItem={removeItem} order={order} />
              <TipPercentageForm tip={tip} setTip={setTip} />
              <OrderTotal placeOrder={placeOrder} tip={tip} order={order} />
            </>
          ) : (
            <p className="text-center  font-semibold ">
              No hay ninguna orden aún
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

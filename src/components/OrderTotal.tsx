import { useMemo } from "react";
import { OrderItem } from "../types";
import { FormatCurrency } from "../helpers";

interface OrderTotalProps {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
}

export default function OrderTotal({
  order,
  tip,
  placeOrder,
}: OrderTotalProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);

  const TotalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-bold text-2xl"> Totales y Propinas:</h2>
        <p>
          Subtotal:{" "}
          <span className="font-bold"> {FormatCurrency(subtotalAmount)} </span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{FormatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold"> {FormatCurrency(TotalAmount)} </span>
        </p>
      </div>
      <button
        onClick={placeOrder}
        className="w-full p-3 font-bold uppercase bg-green-600 text-slate-50 border-lime-950 rounded-lg mt-10 disabled:opacity-35"
        disabled={TotalAmount == 0}
      >
        Crear otra orden
      </button>
    </>
  );
}

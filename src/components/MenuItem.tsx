import type { MenuItem } from "../types";

interface MenuItemProps {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      onClick={() => addItem(item)}
      className="  border-2 border-teal-700 w-full hover:bg-teal-700 p-2 flex justify-between"
    >
      <p> {item.name} </p>
      <p className="font-bold"> ${item.price} </p>
    </button>
  );
}

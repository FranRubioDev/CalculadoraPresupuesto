import type { ServiceItemT } from "../types"


type ServiceItemProps = {
    item : ServiceItemT,
    addItem: (item: ServiceItemT) => void
}

export default function ServiceItem({item, addItem} : ServiceItemProps) {
  return (
    <button
    className="border border-rose-300 rounded-md hover:bg-rose-500 hover:text-white w-full p-3 flex justify-between"
    onClick={() => addItem(item)}
    >
        <p className="font-black"> {item.name}</p>
        <p className="font-black"> {item.price}h</p>

    </button>
  )
}


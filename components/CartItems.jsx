import React, { useEffect, useState } from "react";
import { RemoveRounded, AddRounded, DeleteRounded } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { actionType } from "./Reducer";

const CartItems = ({ name, imgSrc, price, itemId, calculateTotalPrice }) => {
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      setQty(item.quantity);
    }
  }, [cart, itemId]);

  const updateQty = (action) => {
    if (action === "add") {
      dispatch({
        type: actionType.UPDATE_ITEM_QUANTITY,
        itemId: itemId,
        quantity: qty + 1,
      });
    } else if (action === "remove" && qty > 1) {
      dispatch({
        type: actionType.UPDATE_ITEM_QUANTITY,
        itemId: itemId,
        quantity: qty - 1,
      });
    }
    dispatch({
      type: actionType.SET_TOTAL,
      total: calculateTotalPrice(),
    });
  };

  const deleteItem = () => {
    //console.log(cart.filter((item) => item.id !== itemId));
    dispatch({
      type: actionType.REMOVE_FROM_CART,
      //cart: cart.filter((item) => item.id !== itemId),
      itemId:itemId,
    });
    //console.log(cart);
  };

  return (
    <div className="flex items-center my-2 bg-gray-100">
      <div className="w-14 h-14 min-h-[3.5rem] min-w-[3.5rem] rounded-xl flex items-center justify-center p-1 bg-gray-500">
        <img
          src={imgSrc}
          className="w-full h-full object-contain "
          alt={name}
        />
      </div>
      <div className="ml-2">
        <p className="text-lg text-gray-700 font-semibold">{name}</p>
        <div className="text-lg text-slate-700 flex items-center justify-between w-[150px]">
          <span className="text-cyan-500">x {qty}</span>
          <div className="flex items-center justify-between w-16">
            <RemoveRounded
              className="cursor-pointer text-gray-700 text-2xl"
              onClick={() => updateQty("remove")}
            />
            <AddRounded
              className="cursor-pointer text-gray-700 text-2xl"
              onClick={() => updateQty("add")}
            />
          </div>
        </div>
      </div>
      <p className="font-semibold ml-auto text-zinc-800">
        <span className="text-cyan-500 text-sm">&#8358; </span>
        <span className="text-base">{price * qty}</span>
      </p>
      <p>
        <DeleteRounded className="text-red-700 cursor-pointer" onClick={deleteItem} />
      </p>
    </div>
  );
};

export default CartItems;

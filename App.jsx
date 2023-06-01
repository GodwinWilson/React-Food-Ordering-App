import { useEffect, useState } from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Favourite from "./pages/Favourite";
import Account from "./pages/Account";
import { useStateValue } from "./components/StateProvider";
import { actionType } from "./components/Reducer";
import Chat from "./pages/Chat";
import Payment from "./pages/Payment";

function App() {
   const [{ cart, total, favourites }, dispatch] = useStateValue();
   const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotalPrice = () => {
    if (cart && cart.length > 0) {
      const calculatedTotal = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );
      return calculatedTotal;
    }
    return 0;
  };
const handleAddToCart = (item) => {
  const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
  if (itemInCart) {
    dispatch({
      type: actionType.UPDATE_ITEM_QUANTITY,
      itemId: item.id,
      quantity: itemInCart.quantity + 1,
    });
  } else {
    dispatch({
      type: actionType.ADD_TO_CART,
      item: { ...item, quantity: 1 },
    });
  }
  dispatch({
    type: actionType.SET_TOTAL,
    total: calculateTotalPrice(),
  });
  const calculatedTotal = calculateTotalPrice();
  setTotalPrice(calculatedTotal);
};



  return (
    <>
      <Routes>
        <Route path="/" element={<Header calculateTotalPrice={calculateTotalPrice} cart={cart} handleAddToCart={handleAddToCart}/>}>
          <Route index element={<Main />} />
          <Route path="favourite" element={<Favourite calculateTotalPrice={calculateTotalPrice}/>}/>
          <Route path="wallet" element={<Account calculateTotalPrice={calculateTotalPrice}/>}/>
          <Route path="settings"/>
          <Route path="chat" element={<Chat calculateTotalPrice={calculateTotalPrice}/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React from 'react'
import Debit from './Debit';
import EmptyCart from "../assets/emptyCart.png";
import SubMenuContainer from "./SubMenuContainer";
import CartItems from "./CartItems";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { actionType } from "./Reducer";
import Payment from '../pages/Payment';


const RightMenu = ({ cart, openMenu, setOpenMenu }) => {
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
  const navigate = useNavigate();

  return (
    <div
      className={`${
        openMenu ? "active" : ""
      } rr w-full vs:w-[350px] fixed right-0 top-16 bg-white z-[60] flex flex-col items-center py-5 px-3 shadow overflow-y-scroll`}
      id="rightMenu"
    >
      <div className=" w-full px-2 py-1 h-auto">
        {/* */}
        <div
          //className="relative w-full h-[170px] min-w-[250px] min-h-[170px] before:bg-cyan-400"
          className="relative w-full h-[10.7rem] min-w-[250px] min-h-[10.7rem] before:bg-cyan-400"
          id="debitcont"
        >
          <Debit />
        </div>
      </div>
      {cart.length === 0 ? (
        <div className="max-h-[70vh] min-h-[70vh]">
          <img src={EmptyCart} className="" />
        </div>
      ) : (
        <div className="max-h-[70vh] h-[70vh] min-h-[70vh] mt-2">
          <div className="flex items-center justify-between w-full mt-2">
            <SubMenuContainer name={"Carts Items"} />
          </div>
          <div
            className="w-full min-h-[34vh] max-h-[34vh] mt-2 overflow-y-scroll overflow-x-hidden"
            id="cartcontainer"
          >
            {cart &&
              cart.map((data) => (
                <CartItems
                  name={data.name}
                  imgSrc={data.imgSrc}
                  price={data.price}
                  key={data.id}
                  itemId={data.id}
                  calculateTotalPrice={calculateTotalPrice}
                />
              ))}
          </div>
          <div className="flex items-center justify-between w-full py-1 px-2 my-2">
            <h4 className="font-semibold text-lg text-neutral-800">Total</h4>
            <p className="text-lg font-semibold text-neutral-800">
              <span className="text-cyan-800">&#8358;</span>{" "}
              {calculateTotalPrice()}
            </p>
          </div>
          {/* <button
            className="outline-none border-none py-[6px] px-5 bg-cyan-600 text-white rounded-full text-lg font-semibold w-full"
            onClick={() => navigate("/payment")}
          >
            Proceed to Buy
          </button> */}
          <Payment calculateTotalPrice={calculateTotalPrice()}/>
        </div>
      )}
    </div>
  );
};

export default RightMenu
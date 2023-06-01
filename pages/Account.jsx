import React from "react";
import RightMenu from "../components/RightMenu";
import { useStateValue } from "../components/StateProvider";
import { actionType } from "../components/Reducer";
import { initialState } from "../components/Reducer";
import { AccountBalanceWalletRounded, AddRounded, RemoveRounded } from "@mui/icons-material";
import {BsSend} from 'react-icons/bs'

const Account = ({calculateTotalPrice}) => {
  //const cart = [];
  const [{ cart }] = useStateValue();

  return (
    <main className="main">
      <div className="mt-20 container mx-auto">
        <h3 className="text-zinc-600">
          Hello, <br />{" "}
          <span className="font-bold text-black text-lg">Godwin Wilson</span>
        </h3>
        <div className="bg-blue-500 h-20 flex flex-col items-start justify-center rounded p-3 shadow-xl">
          <p className="text-slate-100 font-semibold">Your Balance : </p>
          <p className="font-bold text-xl text-green-950">
            &#8358;{" "}
            <span className="text-black dark:text-white">14,595.00</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col items-center justify-center">
            <span className="flex items-center justify-center h-10 w-10 bg-blue-200 rounded-md shadow-lg cursor-pointer">
              <AddRounded className="text-blue-600" />
            </span>
            <p className="font-medium">Deposit</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex items-center justify-center h-10 w-10 bg-orange-200 rounded-md shadow-lg cursor-pointer">
              <BsSend className="text-orange-600" />
            </span>
            <p className="font-medium">Send</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex items-center justify-center h-10 w-10 bg-red-200 rounded-md shadow-lg cursor-pointer">
              <RemoveRounded className="text-red-600" />
            </span>
            <p className="font-medium">Withdraw</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex items-center justify-center h-10 w-10 bg-purple-200 rounded-md shadow-lg cursor-pointer">
              <AccountBalanceWalletRounded className="text-purple-600" />
            </span>
            <p>Payments</p>
          </div>
        </div>
        <section className="mt-5 pb-14">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <div className="flex items-center justify-between py-4 border-b border-solid font-medium text-lg">
            <p>Burger Bistro</p>
            <p>&#8358; 5000</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-solid font-medium text-lg">
            <p>Beer</p>
            <p>&#8358; 1200</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-solid font-medium text-lg">
            <p>Hot Dog</p>
            <p>&#8358; 3300</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-solid font-medium text-lg">
            <p>Double Cheese</p>
            <p>&#8358; 5500</p>
          </div>
          <div className="flex items-center justify-between my-4 font-medium text-lg">
            <p>Snack</p>
            <p>&#8358; 1500</p>
          </div>
        </section>
      </div>
      <RightMenu cart={cart} calculateTotalPrice={calculateTotalPrice}/>
    </main>
  );
};

export default Account;

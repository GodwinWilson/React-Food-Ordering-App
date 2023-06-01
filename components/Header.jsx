import React, { useEffect , useState} from "react";
import Logo from "/Food Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import {} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import Godwin from "../assets/Godwin.jpeg";
import { useStateValue } from "./StateProvider";
import RightMenu from "./RightMenu"
import {Outlet, Link, NavLink} from 'react-router-dom'
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
} from "@mui/icons-material";

const Header = ({ calculateTotalPrice, handleAddToCart }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [{ cart }, dispatch] = useStateValue();

  return (
    <>
      <header className="flex items-center justify-between shadow-md py-1 px-2 w-full h-16 fixed top-0 left-0 z-50 bg-white">
        <div className="min-w-[40px] w-10">
          <img src={Logo} alt="" className="w-full" />
        </div>
        <div className="flex rounded-lg shadow-md p-1 overflow-hidden w-32 sm:w-52 md:w-72">
          <SearchRounded />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none font-medium"
          />
        </div>
        <div className="relative">
          <MdShoppingCart className="text-2xl" />
          <div className="absolute bottom-3 left-2 bg-cyan-300 rounded-full w-full h-full text-center">
            <p className="text-white">{cart ? cart.length : "0"}</p>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-1">
          <div className="min-w-[40px] w-10 h-10">
            <img src={Godwin} alt="" className="rounded-full w-full h-full" />
          </div>
          <h2 className="hidden lg:flex font-bold ">Godwin Wilson</h2>
        </div>
        <div
          className="lg:hidden"
          id="hamburger"
          value={openMenu}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <HiMenuAlt3 className="text-xl cursor-pointer" />
        </div>
      </header>

      {openMenu && (
        <RightMenu
          cart={cart}
          //calculateTotalPrice={calculateTotalPrice}
          handleAddToCart={handleAddToCart}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      )}

      <nav className="nav fixed bottom-0 left-0 lg:left-[21%] lg:w-[40%] flex items-center justify-center w-full h-[60px] bg-gray-400 rounded-t-3xl z-50">
        <ul className="flex items-center" id="bottom">
          <li className="">
            <NavLink
              exact
              to={"/"}
              className="flex items-center font-medium justify-center w-full flex-col text-center"
            >
              <span className="relative block leading-[70px] text-black text-center z-10 text-sm">
                <HomeRounded />
              </span>
            </NavLink>
            <div className="absolute h-[60px] w-[60px] bg-cyan-400 rounded-full top-[-50%] border-[6px] border-solid border-white blue"></div>
          </li>
          <li className="">
            <NavLink
              to={"/chat"}
              className="flex items-center font-medium justify-center w-full flex-col text-center"
            >
              <span className="relative block leading-[70px] text-black z-10 text-center text-sm">
                <Chat />
              </span>
            </NavLink>
            <div className="absolute h-[60px] w-[60px] bg-cyan-400 rounded-full top-[-50%] border-[6px] border-solid border-white blue"></div>
          </li>
          <li className="">
            <NavLink
              to={"/wallet"}
              className="flex items-center font-medium justify-center w-full flex-col text-center"
            >
              <span className="relative block leading-[70px] text-center z-10 text-black text-sm">
                <AccountBalanceWalletRounded />
              </span>
            </NavLink>
            <div className="absolute h-[60px] w-[60px] bg-cyan-400 rounded-full top-[-50%] border-[6px] border-solid border-white blue"></div>
          </li>
          <li className="">
            <NavLink
              to={"/favourite"}
              className="flex items-center font-medium justify-center w-full flex-col text-center"
            >
              <span className="relative block leading-[70px] text-center text-black text-sm z-10">
                <Favorite />
              </span>
            </NavLink>
            <div className="absolute h-[60px] w-[60px] bg-cyan-400 rounded-full top-[-50%] border-[6px] border-solid border-white blue"></div>
          </li>
          <li className="">
            <NavLink
              to={"/settings"}
              className="flex items-center font-medium justify-center w-full flex-col text-center"
            >
              <span className="relative block leading-[70px] text-center z-10 text-black text-sm">
                <Settings />
              </span>
            </NavLink>
            <div className="absolute h-[60px] w-[60px] bg-cyan-400 rounded-full top-[-50%] border-[6px] border-solid border-white blue"></div>
          </li>

          <div className="absolute h-[60px] w-[60px] bg-cyan-400 rounded-full top-[-50%] border-[6px] border-solid border-white blue"></div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;

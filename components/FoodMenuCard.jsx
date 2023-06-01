import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

const FoodMenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <>
      <div
        className={`w-20 min-w-[80px] h-[100px] rounded-lg cursor-pointer bg-white p-1 shadow-md flex flex-col items-center justify-between foodmenucard ${
          isActive ? "active" : ""
        }`}
      >
        <div
          className="w-10 h-10 min-h-[40px] min-w-[40px] rounded-full p-[2px] overflow-hidden flex items-center justify-center bg-white"
          id="imagebox"
        >
          <img src={imgSrc} alt="" className="h-full w-full object-contain" />
        </div>

        <p className="text-cyan-500 font-bold">{name}</p>
        <i className="flex items-center justify-center bg-cyan-500 rounded-md text-white">
          <ChevronRightRounded />
        </i>
      </div>
    </>
  );
};

export default FoodMenuCard;

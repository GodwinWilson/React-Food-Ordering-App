import React, { useState } from "react";
import RightMenu from "../components/RightMenu";
import { useStateValue } from "../components/StateProvider";
import { AddRounded } from "@mui/icons-material";
import {GrSend} from 'react-icons/gr'

const Chat = ({ calculateTotalPrice }) => {
  const [{ cart }] = useStateValue();
  const [isOpen, setIsOpen] = useState(false)
    const openDialog = () => {
      setIsOpen(true);
    };

    const closeDialog = () => {
      setIsOpen(false);
    };
    
  return (
    <main className="main relative h-[80vh]">
      <div className="mt-20 h-full">
        <h2 className="font-bold text-2xl">Chat</h2>
        <p className=" text-center h-full">No Messages yet</p>
      </div>
      {isOpen && (
        <dialog open className="absolute top-[30%] bg-zinc-200 rounded-lg">
          <button onClick={closeDialog} className="float-right font-black">X</button>
          <h2>New Chat:</h2>
          <textarea cols="30" rows="5" className="focus:outline-none"></textarea>
          <button onClick={(e) => e.preventDefault} className="text-lg"><GrSend className="text-red-700"/></button>
        </dialog>
      )}
      <button
        className="bg-indigo-200 cursor-pointer flex items-center justify-center h-16 w-16 rounded-full absolute bottom-10 md:right-16 right-5 chatadd"
        onClick={openDialog}
      >
        <AddRounded className="font-bold text-indigo-800" />
      </button>
      <RightMenu cart={cart} calculateTotalPrice={calculateTotalPrice} />
    </main>
  );
};

export default Chat;

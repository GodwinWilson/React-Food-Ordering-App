import React from "react";

const UserHeader = ({ name, discount, link }) => {
  return (
    <>
      <div className="w-full h-auto p-3 pb-24 flex flex-col items-start justify-center">
        <h3 className="text-xl font-bold">Hello {name},</h3>
        <p className="text-slate-400 w-1/3 sm:w-1/2">
          Get discount if you purchase items worth <span className="text-cyan-400 font-bold">&#8358;{discount}</span> or more
        </p>
        <a
          href={link}
          className="bg-cyan-500 text-white rounded-md p-2 font-medium hover:shadow-lg shadow-cyan-600 hover:bg-cyan-400 transition-shadow"
        >
          Learn More
        </a>
      </div>
    </>
  );
};

export default UserHeader;

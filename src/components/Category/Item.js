import React from "react";

function Item({ img, title }) {
  return (
    <div className="mb-6 ">
      <div className=" flex bg-slate-100 items-center px-4 space-x-7 py-3 text-[#072f60] hover:bg-[#072f60] hover:text-white rounded-sm cursor-pointer transition-all duration-500 ease-in-out">
        <img src={img} className="w-10" alt="" />
        <p className="text-lg mt-2 font-semibold">{title}</p>
      </div>
    </div>
  );
}

export default Item;

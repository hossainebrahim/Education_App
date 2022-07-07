import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

function Item({ Img, title }) {
  return (
    <>
      <div className="relative h-80 cursor-pointer rounded-md">
        <div>
          <div className="bg-gray-700 bg-opacity-50 h-[100%] absolute w-[100%] rounded-md"></div>
        </div>
        <img src={Img} alt="" className="h-[100%] object-cover rounded-md" />

        <div className="absolute bottom-7 left-10">
          <div className="bg-white px-2 py-2 w-10 rounded-full flex justify-center items-center">
            <BsFillPlayFill size={25} className="text-[#3bbca7]" />
          </div>
          <h4 className="text-white text-lg mt-2">{title}</h4>
        </div>
      </div>
    </>
  );
}

export default Item;

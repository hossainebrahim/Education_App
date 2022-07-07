import React from "react";
import { AiOutlineBook, AiFillStar } from "react-icons/ai";
import { FcManager } from "react-icons/fc";

function Item({ mainImg, title, manImg, name, heading, num1, num2 }) {
  return (
    <>
      <div>
        <div className="">
          <div>
            <div className="card">
              <img src={mainImg} className="card-img-top h-56" alt="..." />
              <div className="card-body">
                <h5 className="bg-slate-100 w-1/3 text-sm p-2 mt-2 mb-3 text-[#3BBCA7]">
                  {title}
                </h5>
                <div>
                  <div className="flex items-center gap-2">
                    <img className="rounded-full w-11 " src={manImg} alt="" />
                    <p>{name}</p>
                  </div>
                  <div>
                    <h1 className="text-lg mt-3 text-[#072F60]">{heading}</h1>
                  </div>
                  <div className="border-top"></div>
                  <div className="mt-2 flex justify-between">
                    <div className="flex gap-3">
                      <div className="flex gap-2 items-center">
                        <FcManager />
                        <span>{num1}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <AiOutlineBook />
                        <span>{num2}</span>
                      </div>
                    </div>
                    <div className="flex">
                      <AiFillStar className="text-yellow-400 text-xl" />
                      <AiFillStar className="text-yellow-400 text-xl" />
                      <AiFillStar className="text-yellow-400 text-xl" />
                      <AiFillStar className="text-yellow-400 text-xl" />
                      <AiFillStar className="text-yellow-400 text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;

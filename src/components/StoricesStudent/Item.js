import React from "react";

const Item = ({ dis, url, name, location }) => {
  return (
    <>
      <div className="w-[350px] container">
        <div className="py-4 px-5 bg-[#f6f7f9] border-1">
          <div>
            <p className="text-[#072f60] text-xl leading-8">{dis}</p>
          </div>

          <div className="flex gap-3">
            <img
              className=" rounded-full w-16 h-16 object-cover"
              src={url}
              alt="man"
            />
            <div>
              <h3>{name}</h3>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;

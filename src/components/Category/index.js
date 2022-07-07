import React from "react";
import pencil from "../../images/pencil.png";
import science from "../../images/science.png";
import math from "../../images/math.png";
import food from "../../images/food-delivery.png";
import tech from "../../images/tech.png";
import med from "../../images/med.png";
import graduating from "../../images/graduating-student.png";
import artBook from "../../images/art-book.png";
import Item from "./Item";

function Category() {
  return (
    <>
      <section className="pt-16 pb-16">
        <div className="container">
          <div className="row">
            <div className=" mb-12 col-md-8 col-sm-12 ">
              <h1 className="text-[#072F60] text-3xl">
                Featured topics by category
              </h1>
            </div>
            <div className=" col-md-4 col-sm-12 flex md:justify-end md:items-start mb-4 sm:justify-start">
              <button className="border-solid border-2 border-[#3bbca7] text-[#3bbca7] py-[10px] px-4 hover:bg-[#3bbca7] hover:text-white transition-all duration-100 ease-in-out rounded-sm">
                Explore More
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={pencil} title="Design" />
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={science} title="Chemistry" />
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={math} title="Mathmetics" />
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={food} title=" Food & Recipe" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={tech} title="Technology " />
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={med} title="Medical" />
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={graduating} title="Language" />
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <Item img={artBook} title="Art & Block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;

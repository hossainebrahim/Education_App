import React from "react";
import hero1 from "../../images/HR0835.jpeg";
import hero2 from "../../images/HTR084.jpeg";

const HeroSection = () => {
  return (
    <>
      <section className="bg-gray-50 h-[100%] flex justify-center items-center pt-20 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="">
                <h3 className="text-[#3BBCA7] text-sm">
                  DEVELOPED BY TO TEACHERS
                </h3>
                <h1 className="text-5xl md:text-4xl sm:text-3xl leading-[60px] text-[#072F60]">
                  Experience a learning
                  <br /> platform that take you <br /> next level
                </h1>
                <p className="leading-7">
                  World-class training and development <br /> programs developed
                  by top teachers
                </p>
                <button className="px-4 py-[10px] bg-[#3BBCA7] text-white font-600 text-lg hover:bg-[#072f60] rounded-sm transition-all duration-75 ease-in-out mb-10">
                  Explore All Courses
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="flex gap-3 items-center">
                <div>
                  <img src={hero1} className="" alt="" />
                </div>
                <div>
                  <img src={hero2} className="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

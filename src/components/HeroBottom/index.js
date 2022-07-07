import React from "react";
import images from "../../images/2.png";
import images2 from "../../images/icon.png";
import images3 from "../../images/icon2.png";

function HeroButton() {
  return (
    <>
      <section className="bg-[#072F60] pt-12 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-8">
              <div className="flex items-center justify-center">
                <div className="w-16 mr-10">
                  <img src={images} alt="" />
                </div>
                <div className="flex justify-center flex-col mt-2">
                  <h4 className="text-white text-xl">Over 155,000</h4>
                  <p className="text-white text-md">
                    Video courses on career skills
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-8">
              <div className="flex items-center justify-center">
                <div className="w-16 mr-10">
                  <img src={images2} alt="" />
                </div>
                <div className="flex justify-center flex-col mt-2">
                  <h4 className="text-white text-xl">Choose from</h4>
                  <p className="text-white text-md">Top industry instructors</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-8">
              <div className="flex items-center justify-center">
                <div className="w-16 mr-10">
                  <img src={images3} alt="" />
                </div>
                <div className="flex justify-center flex-col mt-2">
                  <h4 className="text-white text-xl">Lifetime access</h4>
                  <p className="text-white text-md">On mobile and desktop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroButton;

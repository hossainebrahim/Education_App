import React from "react";
import AuthImg from "../../images/auth.png";
import { BsCheckLg } from "react-icons/bs";

function Authored() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#F6F7F9] to-[#3BBCA7] pt-14 my-12">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="">
                <h1 className="text-4xl pt-6 pb-4 leading-[50px] px-1 text-[#072F60]">
                  Thousands of courses authored by industry experts
                </h1>
                <div className=" flex flex-col leading-10">
                  <li
                    href=""
                    className="text-gray-700  flex items-center justify-start"
                  >
                    <span className="mr-3 text-[#3BBCA7]">
                      <BsCheckLg />
                    </span>{" "}
                    Get access to 4,000+ of our top courses
                  </li>

                  <li
                    href=""
                    className="text-gray-700 flex items-center justify-start"
                  >
                    <span className="mr-3 text-[#3BBCA7]">
                      <BsCheckLg />
                    </span>{" "}
                    Popular topics to learn now
                  </li>

                  <li
                    href=""
                    className="text-gray-700 flex items-center justify-start"
                  >
                    <span className="mr-3 text-[#3BBCA7]">
                      <BsCheckLg />
                    </span>{" "}
                    Find the right instructor for you
                  </li>
                </div>
                <button className="px-3 py-[10px] bg-[#3BBCA7] text-white hover:bg-[#072f60] rounded-sm transition-all duration-300 ease-in-out mt-5">
                  Get Started Today
                </button>
              </div>
            </div>
            <div className="col-md-6 bg-[url(https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/2/2021/11/SPPU2.png)] bg-no-repeat bg-cover bg-left-bottom">
              <div className="">
                <img src={AuthImg} alt="auth" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Authored;

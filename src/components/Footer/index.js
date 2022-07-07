import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="bg-[#072f60] pt-20 text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="">
                <img
                  src="https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/2/2021/12/2x_logo-white.png"
                  className="mb-4 w-[75%]"
                  alt="footer_logo"
                />
                <div className="">
                  <p className="text-[#DDDFE3] leading-7">
                    We support programs <br /> that create <br /> advancement
                    for <br /> people
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className=" border-1 border-[#3BBCA7] hover:bg-[#3BBCA7] transition-all duration-300 ease-in-out cursor-pointer p-2 rounded-full text-[#3BBCA7] hover:text-white">
                    <BsFacebook />
                  </div>
                  <div className=" border-1 border-[#3BBCA7] hover:bg-[#3BBCA7] transition-all duration-300 ease-in-out cursor-pointer p-2 rounded-full text-[#3BBCA7] hover:text-white">
                    <AiOutlineTwitter />
                  </div>
                  <div className=" border-1 border-[#3BBCA7] hover:bg-[#3BBCA7] transition-all duration-300 ease-in-out cursor-pointer p-2 rounded-full text-[#3BBCA7] hover:text-white">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <h3 className="text-xl mb-3">Useful links</h3>
                <div className="flex flex-col leading-10">
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    About Us
                  </a>
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Terms & condition
                  </a>
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Student spotlight
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <h3 className="text-xl mb-3">Learning</h3>
                <div className="flex flex-col leading-10">
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Business Strategy
                  </a>
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Become A Teacher
                  </a>
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Project Management
                  </a>
                  <a
                    href=""
                    className="no-underline text-[#DDDFE3] text-md hover:underline transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Membership
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <h3 className="text-xl mb-3">Contact Us</h3>
                <div className="flex flex-col">
                  <p className="text-[#d2d6d9] text-md flex gap-1 ">
                    <span className="text-[#3BBCA7]">
                      <FaPhoneVolume />
                    </span>{" "}
                    +91 458 654 528
                  </p>
                  <p className="text-[#d2d6d9] text-md flex gap-1">
                    <span className="text-[#3BBCA7]">
                      <HiOutlineMailOpen />
                    </span>
                    info@example.com
                  </p>
                  <p className="text-[#d2d6d9] text-md flex gap-1">
                    <span className="text-[#3BBCA7]">
                      <MdLocationOn />
                    </span>
                    PO Box 16122 Collins
                  </p>
                  <p className="no-underline text-[#d2d6d9] text-md ">
                    Street West Victoria 8007
                  </p>
                  <p className="no-underline text-[#d2d6d9] text-md ">
                    Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr className="text-gray-400" />
            <div className="flex justify-center items-center py-3">
              <p className="text-[#DDDFE3] text-md">
                © Copyright 2022 Pixelcurve All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

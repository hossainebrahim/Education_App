import React from "react";
import logo from "../../images/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="h-[50px]" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item flex justify-center items-center gap-[3px]">
                <a
                  className=" no-underline text-gray-700  hover:text-[#3bbca7] transition-all ease-in-out duration-75"
                  href="#"
                >
                  Home
                </a>
                <FaAngleDown className="hover:text-[#3bbca7] transition-all ease-in-out duration-75" />
              </li>
              <li className="nav-item flex justify-center items-center gap-[3px]">
                <a
                  className=" no-underline text-gray-700 hover:text-[#3bbca7] transition-all ease-in-out duration-75"
                  href="#"
                >
                  Courses
                </a>
                <FaAngleDown className="hover:text-[#3bbca7] transition-all ease-in-out duration-75" />
              </li>
              <li className="nav-item flex justify-center items-center gap-[3px]">
                <a
                  className=" no-underline text-gray-700 hover:text-[#3bbca7] transition-all ease-in-out duration-75"
                  href="#"
                >
                  Blog
                </a>
                <FaAngleDown className="hover:text-[#3bbca7] transition-all ease-in-out duration-75" />
              </li>
              <li className="nav-item flex justify-center items-center gap-[3px] ">
                <a
                  className="no-underline text-gray-700 hover:text-[#3bbca7] transition-all ease-in-out duration-75"
                  href="#"
                >
                  Pages
                </a>
                <FaAngleDown className="hover:text-[#3bbca7] transition-all ease-in-out duration-75" />
              </li>
            </ul>

            <div className="p-2 flex justify-center items-center cursor-pointer">
              <HiOutlineShoppingCart size={20} />
            </div>
            <div className="border-solid-[2px]"></div>
            <div className="flex justify-center items-center">
              <a
                href="#"
                className="no-underline text-gray-900 hover:text-[#3bbca7] transition-all ease-in-out duration-75"
              >
                Login
              </a>
              <span className="ml-2 mr-2">/</span>
              <a
                href="#"
                className="no-underline text-gray-900 hover:text-[#3bbca7] transition-all ease-in-out duration-75"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

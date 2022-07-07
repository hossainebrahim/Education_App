import React from "react";
import Item from "./Item";

function Courses() {
  return (
    <>
      <section className="pt-14 pb-14">
        <div className="container">
          <div className="flex justify-center">
            <h1 className="mb-12">
              <span className="bg-yellow-300">Explore P</span>opular Courses
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/03/UJYT73-740x540.jpeg"
                }
                title="Cooking"
                manImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/HIDA4-9-1-150x150.jpg"
                }
                name="Tim Burton"
                heading="Absolute Beginners Cooking Course"
                num1="19"
                num2="10"
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://image.shutterstock.com/image-photo/double-exposure-graph-rows-coins-260nw-530884738.jpg"
                }
                title="Finance"
                manImg={
                  "https://secure.gravatar.com/avatar/0320b65d6e6bab632aa4e9efd76804ae?s=32&d=mm&r=g"
                }
                name="Devon Koss"
                heading="Business English Training Courses"
                num1="27"
                num2="12"
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2021/06/BANJ63-9-1-740x540.jpg"
                }
                title="Finance"
                manImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/HIDA4-9-1-150x150.jpg"
                }
                name="Fred Hyman"
                heading="The Business Intelligence Analyst Course"
                num1="2"
                num2="10"
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2021/05/VAR94-9-1-740x540.jpg"
                }
                title="Design"
                manImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/HIDA4-9-1-150x150.jpg"
                }
                name="Tim Burton"
                heading="Web Design Training with Elementore"
                num1="19"
                num2="10"
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/03/FOO634-740x540.jpeg"
                }
                title="Cooking"
                manImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/HIDA4-9-1-150x150.jpg"
                }
                name="Tim Burton"
                heading="Basic Level Youth Health and Cooking"
                num1="5"
                num2="12"
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/PRO833-740x540.jpg"
                }
                title="Cooking"
                manImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/HIDA4-9-1-150x150.jpg"
                }
                name="Tim Burton"
                heading="Drawing and Painting Course for Children"
                num1="4"
                num2="14"
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/BIRR267-740x540.jpg"
                }
                title="Cooking"
                manImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/HIDA4-9-1-150x150.jpg"
                }
                name="Tim Burton"
                heading="Drawing and Painting Course for Children"
                num1="4"
                num2="14"
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mb-5 cursor-pointer">
              <Item
                mainImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/03/FOOT733-740x540.jpeg"
                }
                title="Cooking"
                manImg={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/5/2022/01/HIDA4-9-1-150x150.jpg"
                }
                name="Tim Burton"
                heading="Drawing and Painting Course for Children"
                num1="4"
                num2="14"
              />
            </div>

            <div className="flex justify-center">
              <button className="px-4 py-3 bg-[#3BBCA7] text-white hover:bg-[#072f60] rounded-sm transition-all duration-300 ease-in-out">
                Explore All Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;

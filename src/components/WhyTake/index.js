import React from "react";

import Item from "./Item";

function WhyTake() {
  return (
    <>
      <section className="pt-10 pb-10">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="text-4xl">
              <span className="bg-yellow-400">Why Take</span> This Course
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <Item
                Img={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/6/2022/01/MKH283-9.jpg"
                }
                title="Taught by industry professionals"
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <Item
                Img={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/6/2022/01/GER467-9.jpg"
                }
                title="Learn from the expert course mentor"
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <Item
                Img={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/6/2022/01/MJKS424-9.jpg"
                }
                title="Discuss your future career goals "
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <Item
                Img={
                  "https://thepixelcurve.com/wp/lmsmart/tutor/wp-content/uploads/sites/6/2022/01/MJKS490-9.jpg"
                }
                title="Mentorship and community support"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyTake;

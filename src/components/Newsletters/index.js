import React from "react";

function Newsletters() {
  return (
    <>
      <section className="bg-[#3BBCA7] pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-white text-3xl">Subscribe Newsletters</h1>
              <p className="text-white text-md">
                Enter your email address to register to our newsletter
              </p>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Your email address"
                className="p-3 outline-none rounded-sm"
              />
              <input
                type="button"
                value="Subscribe"
                className="bg-[#141948] p-3 rounded-sm text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletters;

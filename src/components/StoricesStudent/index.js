import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";

function StoriesStudent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="">
        <div className="container py-12">
          <h1 className="pb-5 text-4xl text-center">
            <span className="bg-yellow-400 sm:text-md">Stories of</span>{" "}
            Successful Students
          </h1>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
          >
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              name="Jon"
              location="Usa"
              dis="I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it"
            />
            <Item
              url="https://freepngimg.com/thumb/man/22654-6-man-thumb.png"
              name="Ebrahim"
              location="Uk"
              dis="I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it"
            />
            <Item
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPT9mqiidTshsbvsr8SDUYnTLNv3f31RTL0JrQFOZd7ECP8OQ1h0mR_Ze3VlzMPknrUhs&usqp=CAU"
              name="Jon"
              location="Aus"
              dis="I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it"
            />
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              name="Jon"
              location="Usa"
              dis="I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it"
            />
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              name="Jon"
              location="Usa"
              dis="I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it"
            />
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              name="Jon"
              location="Usa"
              dis="I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default StoriesStudent;

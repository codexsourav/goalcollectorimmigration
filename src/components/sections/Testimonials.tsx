"use client";
import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import { Ratings } from "../ui/ratings";
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
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Testimonials() {
  return (
    <div className="container py-10">
      <h1 className="md:text-3xl text-xl font-bold text-blue-950 text-center ">
        TESTIMONIALS
      </h1>
      <h1 className="md:text-5xl text-3xl font-bold uppercase text-center mt-5">
        our Happy
        <span className="text-blue-700">Students </span>&
        <span className="text-blue-700"> employee</span>
      </h1>
      <div className="mt-11">
        <Carousel
          responsive={responsive}
          itemClass="h-96 px-3"
          arrows={false}
          className="cursor-grab"
          autoPlay={true}
          infinite
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i + "review"}
              className="w-full h-full bg-white border select-none border-blue-50 overflow-hidden shadow-lg relative p-8  flex flex-col justify-between"
            >
              <p className="text-gray-900 text-xl line-clamp-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore perspiciatis quia nemo deleniti repellat delectus
                reiciendis alias corporis a eaque, ullam nesciunt molestias quam
                officia placeat tenetur blanditiis cupiditate? Natus.
              </p>

              <div className="flex gap-3 mt-10">
                <Image
                  src="https://media.istockphoto.com/id/1371301832/photo/excited-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=AtgXnYVh2GpkMGlLwjIYDAwQ6fFvr0ii591bsEaJyLk="
                  width={300}
                  height={300}
                  className="w-12 h-12 rounded-lg object-cover"
                  alt=""
                />
                <div className="">
                  <p className="text-gray-900 text-lg  ">- John Doe, Student</p>
                  <p className=" text-sm">02/11/2001</p>
                </div>
              </div>
              <Ratings rating={5} className="flex" variant="yellow" />
              <div className="absolute right-0 bottom-0 w-20 h-20 gap-1 justify-center items-center   z-20 flex flex-wrap">
                {Array.from({ length: 81 }).map((_, i) => (
                  <div
                    className="w-[5px] h-[5px] rounded-xl bg-blue-100  transition-all"
                    key={i + "diot"}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;

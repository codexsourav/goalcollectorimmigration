import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Image from "next/image";
function Services() {
  return (
    <div className="w-full  py-28 bg-box bg-blue-100  ">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="md:text-xl mb-5 font-bold uppercase text-blue-950 text-center">
          what we provide
        </h1>
        <h1 className="md:text-6xl text-4xl  mb-12 font-bold uppercase text-center">
          our <span className="text-blue-700">services</span>
        </h1>

        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              className="w-full shadow-xl bg-white p-8 group hover:bg-blue-200 transition-all"
              key={i + "-service"}
            >
              <Image
                width={800}
                height={800}
                className="object-cover h-44 w-full"
                src="https://www.goalcollectorimmigration.com/images/jobs-germany.jpg"
                alt="map"
              />
              <h1 className="text-2xl mt-5 font-bold text-blue-900">
                Nursing jobs in germany
              </h1>
              <p className="text-blue-900/60 mt-2  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, repellat.
              </p>
              <div className="flex justify-start items-center gap-4 mt-5">
                <div className="w-10 h-10 flex justify-center items-center bg-blue-100 group-hover:bg-white rounded-md">
                  <MdKeyboardDoubleArrowRight
                    size={20}
                    className="text-blue-700"
                  />
                </div>
                <p className="text-xl text-blue-700/80 font-bold">Read More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

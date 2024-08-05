import Image from "next/image";
import React from "react";

function Universities() {
  return (
    <div className="container py-20">
      <h1 className="md:text-3xl text-xl font-bold text-blue-950 text-center ">
        Courses
      </h1>
      <h1 className="md:text-5xl text-3xl font-bold uppercase text-center mt-5">
        Top Mbbs <span className="text-blue-700">universities</span>
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            className="h-[450px] w-full group relative pb-10 bg-white border border-blue-50 shadow-lg flex justify-between items-center flex-col"
            key={i + "image-c"}
          >
            <div className="w-full h-56 overflow-hidden">
              <Image
                width={1200}
                height={1300}
                alt=""
                src="https://www.goalcollectorimmigration.com/images/belgorod-university.JPG"
                className="w-full h-56 object-cover group-hover:scale-105 group-hover:rotate-2 transition-all"
              />
            </div>

            <h1 className="text-2xl font-bold capitalize text-center text-blue-950">
              belgorod state medical university
            </h1>
            <div className="w-24 h-[2px] group-hover:w-36 transition-all  bg-blue-800 rounded-full"></div>
            <h1 className="font-bold uppercase text-xl text-blue-900">
              russia
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universities;

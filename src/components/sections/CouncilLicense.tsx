import React from "react";
import ImageMarquree from "./parts/ImageMarquree";
import Image from "next/image";

function CouncilLicense() {
  return (
    <div className="mb-20 md:mb-36">
      <div className="container text-center">
        <h1 className="md:text-2xl uppercase  ">
          Our Achievers with Goal collector Immigration
        </h1>
        <br />
        <h2 className="md:text-6xl text-3xl font-bold">
          Students Received{" "}
          <span className="text-blue-800">
            Germany Nursing <br /> Council License
          </span>
        </h2>
        <div className="mt-10 relative">
          <div className=" h-36 md:h-64 md:w-36  w-10 bg-gradient-to-r from-transparent to-white absolute right-0 top-0 z-20"></div>
          <div className=" h-36 md:h-64 md:w-36  w-10 bg-gradient-to-r from-white to-transparent absolute left-0 top-0 z-20"></div>
          <ImageMarquree direction="right">
            {Array.from({ length: 20 }).map((_, i) => {
              return (
                <Image
                  key={"image-" + i}
                  width={800}
                  height={800}
                  className="md:w-64 w-36 h-36 bg-white md:h-64 object-contain border-2 shadow-xl mx-4"
                  src="https://www.goalcollectorimmigration.com/images/ls01.jpg"
                  alt="Students"
                />
              );
            })}
          </ImageMarquree>
        </div>
      </div>
    </div>
  );
}

export default CouncilLicense;

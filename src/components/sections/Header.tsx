import React from "react";
import { Button } from "@/components/ui/button";
import { IoPlaySharp } from "react-icons/io5";
import Image from "next/image";

import VideoPlay from "@/components/sections/pupups/VideoPlay";

function Header() {
  return (
    <div className="w-full md:py-24 py-16 md:h-[80vh] min-h-[700px] max-h-[1100px] bg-hero bg-cover bg-no-repeat bg-center">
      <div className="container grid lg:grid-cols-2 h-full gap-14">
        <div className="flex justify-center items-start h-full flex-col">
          <h1 className="md:text-6xl text-4xl font-bold text-blue-950">
            Learn German Language with Goal Collector Immigration
          </h1>
          <p className="md:text-3xl text-xl md:mt-11 mt-5 text-blue-950/85">
            Registered with the Ministry of External Affairs, INDIA.
          </p>
          <Button className="border-none md:w-48 w-36 md:mt-14 mt-10 rounded-none md:text-xl md:h-16 h-12 shadow-xl">
            Apply Now
          </Button>
        </div>
        <div className="h-full w-full flex justify-end items-center ">
          <div className="w-full md:h-[400px] h-[230px] relative">
            <VideoPlay>
              <Image
                src="https://www.kcrconsultants.com/wp-content/uploads/2023/07/Requirements-for-an-Ausbildung-in-Nursing-in-Germany-Feature-Image-1024x577.webp"
                width={4200}
                height={4000}
                alt=""
                quality={100}
                className="w-full md:h-[400px] h-[230px] object-cover  rounded-3xl shadow-2xl "
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-16 h-16 shadow-xl rounded-full bg-blue-600/45 border-[3px] cursor-pointer border-white/95 flex justify-center items-center">
                <IoPlaySharp className="text-white ml-1 text-xl" />
              </div>
            </VideoPlay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import AboutContent from "@/components/sections/parts/aboutContetnt";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GiEarthAmerica } from "react-icons/gi";
import { HiMiniAcademicCap } from "react-icons/hi2";
function About() {
  return (
    <div className="container py-32">
      <div className=" grid lg:grid-cols-2 ">
        <div className="">
          <h1 className="md:text-3xl text-2xl font-bold flex justify-start items-center gap-5 uppercase">
            <span className="before:content-[''] before:w-10 before:h-[2px] before:bg-blue-700 uppercase before:block  text-4xl "></span>
            About US
          </h1>
          <h1 className="lg:text-6xl text-3xl font-bold uppercase mt-10">
            Goal Collector
            <span className="text-blue-700"> Immigration consultancy </span> pvt
            Ltd
          </h1>
          <p className="mt-5 line-clamp-6 md:text-lg">
            When candidates like you who are committed to making a flourishing
            career abroad and aspire to earn name, fame and money outside India
            Google for ‘Immigration Company for Europe’ or ‘Indian’s leading
            Immigration Company’; you get 50 millions results in sheer 3
            seconds! Goal Collector Immigration Consultancy Pvt. Ltd. is one of
            those million immigration companies in India and it may not even
            appear on the first page of search results. Yet, you are here in
            your pursuit of dream education and career abroad.....
          </p>
          <div className="mt-10 flex md:justify-start justify-between md:gap-20 gap-6">
            <div className="flex justify-start items-center md:gap-8 gap-4">
              <div className=" w-16 h-16 bg-blue-100 flex justify-center items-center text-blue-700 rounded-3xl">
                <GiEarthAmerica size={30} />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl text-blue-900 font-extrabold uppercase">
                  jobs
                </h1>
                <p className="capitalize font-bold text-blue-600/75">germany</p>
              </div>
            </div>
            <div className="flex justify-start items-center md:gap-8 gap-4">
              <div className=" w-16 h-16 bg-blue-100 flex justify-center items-center text-blue-700 rounded-3xl">
                <HiMiniAcademicCap size={30} />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl text-blue-900 font-extrabold uppercase">
                  mbbs
                </h1>
                <p className="capitalize font-bold text-blue-600/75">abroad</p>
              </div>
            </div>
          </div>

          <Button className="mt-10 rounded-none w-36 h-11">EXPLORE MORE</Button>
        </div>
        <div className="relative  lg:flex hidden justify-end items-start">
          <Image
            src="https://www.goalcollectorimmigration.com/images/gallery/2.jpg"
            alt=""
            width={3000}
            height={300}
            className="w-[500px] h-[500px] object-cover"
          />
          <div className="absolute left-0 mt-[300px] ml-20 border-[20px] border-white">
            <Image
              src="https://www.goalcollectorimmigration.com/images/g15.jpg"
              alt=""
              width={3000}
              height={300}
              className="w-[300px] h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
      <AboutContent />
    </div>
  );
}

export default About;

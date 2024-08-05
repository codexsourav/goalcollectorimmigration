import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function ApplyNowInfo() {
  return (
    <div className="container grid lg:grid-cols-2 gap-5 py-20">
      <Image
        src="https://assets.website-files.com/6350d54c8bd992f0aeb521cf/6356522c41400ea6add3fbe6_1.png"
        width={1200}
        height={1200}
        alt=""
        className="w-full lg:h-[550px] h-96 object-cover"
      />
      <div className="w-full lg:h-[550px] flex flex-col justify-between  ">
        <div className="w-full h-full bg-blue-900 bg-thumb bg-cover bg-center bg-no-repeat p-10">
          <h1 className="text-5xl font-bold text-white uppercase">
            take your 1st step to good career with us
          </h1>
          <Button className="rounded-none bg-white text-blue-950 w-40 h-14 text-xl mt-10 hover:text-white">
            Apply Now
          </Button>
        </div>
        <div className="w-full h-full bg-blue-50 grid grid-cols-2">
          <div className="border-r border-white border-b h-full p-5 flex flex-col justify-center gap-2 items-center">
            <h1 className="text-5xl text-blue-900 font-bold">950</h1>
            <h1 className="text-xl ">Students</h1>
          </div>
          <div className="border-b border-white  p-5 h-full flex flex-col justify-center gap-2 items-center">
            <h1 className="text-5xl text-blue-900 font-bold">385</h1>
            <h1 className="text-xl ">Placements</h1>
          </div>
          <div className="border-r border-white  p-5 h-full flex flex-col justify-center gap-2 items-center">
            <h1 className="text-5xl text-blue-900 font-bold">180</h1>
            <h1 className="text-xl ">GermanLanguage</h1>
          </div>
          <div className="border-none border-white  p-5 h-full flex flex-col justify-center gap-2 items-center">
            <h1 className="text-5xl text-blue-900 font-bold">230</h1>
            <h1 className="text-xl ">Nursing jobs</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyNowInfo;

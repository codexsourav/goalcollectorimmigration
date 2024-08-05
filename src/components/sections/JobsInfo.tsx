import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
function JobsInfo() {
  return (
    <div className="">
      <div className="container pt-20 pb-10 grid lg:grid-cols-2 gap-20">
        <div className="">
          <h1 className="text-2xl font-bold text-blue-950 underline">JOBS</h1>
          <h1 className="text-7xl mt-5 font-bold">
            Nursing Jobs{" "}
            <span className="text-blue-900">
              in <br /> Germany
            </span>
          </h1>
          <p className="text-xl mt-10">
            Unemployment is extremely low in Germany compared to the remainder
            of Europe. At present Nurses are in great demand in Germany and
            Nurses are Highly Paid.
          </p>
          <br />
          {[
            "direct work permit",
            "attractive salery",
            "family reunion visa",
            "best indo-german relationship",
            "most econimacally country",
          ].map((e, i) => {
            return (
              <div className="relative">
                <div
                  key={i + "jobng"}
                  className="w-full  px-5 h-12 flex justify-start items-center text-xl mb-5  font-bold text-white  bg-blue-950 capitalize"
                >
                  <p>{e}</p>
                </div>
                <div className="w-full h-12 bg-blue-100 absolute left-2 -z-10 top-2"></div>
              </div>
            );
          })}
        </div>
        <div className="md:flex hidden justify-center items-center relative">
          <div className="w-full h-[500px] overflow-hidden">
            <Image
              src="https://www.2coms.com/images/successful-medical-team.jpg"
              width={1200}
              height={1200}
              alt=""
              className="w-full h-[500px]  object-cover transition-all hover:scale-105"
            />
          </div>

          <div className="absolute w-full h-[500px] bg-blue-100 -z-10 mt-16 -mr-8"></div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mb-10">
        <Button className=" rounded-none mt-10 w-40 ">View All Jobs</Button>
      </div>
    </div>
  );
}

export default JobsInfo;

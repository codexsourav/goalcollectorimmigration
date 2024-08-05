import React from "react";
import { Button } from "../ui/button";

function ApplyNow() {
  return (
    <div className="w-full py-10 bg-map bg-no-repeat bg-center bg-cover">
      <div className="container h-full grid lg:grid-cols-6 gap-5">
        <div className="h-full flex col-span-3 justify-center items-start flex-col gap-5">
          <h1 className="text-5xl font-bold  uppercase">
            DO YOU WANT to get your dream job ?
          </h1>
          <p>
            At present Nurses are in great demand in Germany and Nurses are
            Highly Paid.
          </p>
        </div>
        <div className="lg:flex hidden h-full justify-center items-center">
          <div className="h-52 bg-blue-50 w-[4px] rounded-full"></div>
        </div>
        <div className="flex justify-center lg:col-span-2 items-center   ">
          <Button className="w-52 h-16 rounded-none text-xl uppercase">
            APPLY Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;

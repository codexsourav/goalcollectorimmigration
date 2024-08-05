import Image from "next/image";
import React from "react";

function Team() {
  return (
    <div className="container py-10 ">
      <h1 className="md:text-3xl text-xl font-bold text-blue-950 text-center ">
        Team
      </h1>
      <h1 className="md:text-5xl text-3xl font-bold uppercase text-center mt-5">
        our <span className="text-blue-700">Directors</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-10 mt-10">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div
              className="h-80  transition-all shadow-md  hover:shadow-xl  border-blue-50 bg-white w-full grid grid-cols-5"
              key={i + "-team"}
            >
              <div className="relative col-span-2 overflow-hidden">
                <Image
                  width={1250}
                  height={1250}
                  alt=""
                  src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600nw-1768126784.jpg"
                  className="object-cover w-full h-full"
                />
                <div className="h-full w-28  absolute z-10 top-0 right-0   -mr-[2px] bg-gradient-to-r from-transparent to-white"></div>
              </div>
              <div className="col-span-3 p-10 relative overflow-hidden">
                <h1 className="text-4xl text-blue-900 font-bold">Hassen Meo</h1>
                <p className="text-xl  mt-2 text-blue-500/60">
                  Director & co-Founder
                </p>
                <p className="mt-3 line-clamp-6 text-gray-900">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, earum? Eaque corrupti quasi assumenda unde ut, atque
                  qui corporis a. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Debitis, earum? Eaque corrupti quasi
                  assumenda unde ut, atque qui corporis a.
                </p>
                <div className="absolute top-0 right-0 w-20 h-20 gap-1 justify-center items-center  -mt-2 -mr-2 z-20 flex flex-wrap">
                  {Array.from({ length: 81 }).map((_, i) => (
                    <div
                      className="w-[5px] h-[5px] rounded-xl bg-blue-100  transition-all"
                      key={i + "dot"}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;

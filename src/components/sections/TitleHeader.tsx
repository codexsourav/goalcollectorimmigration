import Image from "next/image";
import React from "react";

function TitleHeader({
  subTitle,
  title,
  image,
}: {
  title: string;
  subTitle: string;
  image?: string;
}) {
  return (
    <div className="w-full h-[70vh] relative">
      <Image
        width={2000}
        height={2200}
        alt=""
        src={image || "/work.jpg"}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 right-0 bg-black/50 w-full h-full">
        <div className="container flex justify-end items-start h-full flex-col py-20">
          <h1 className="text-xl flex justify-start items-center gap-5 uppercase">
            <span className="before:content-[''] before:w-10 before:h-[2px] uppercase before:bg-main before:block "></span>
            {subTitle}
          </h1>
          <br />
          <h1 className="lg:text-8xl uppercase text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default TitleHeader;

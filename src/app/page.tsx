import About from "@/components/sections/About";
import ApplyNow from "@/components/sections/ApplyNow";
import ApplyNowInfo from "@/components/sections/ApplyNowInfo";
import BgLines from "@/components/sections/BgLines";
import CouncilLicense from "@/components/sections/CouncilLicense";
import GermanLangCf from "@/components/sections/GermanLangCf";
import Header from "@/components/sections/Header";
import JobsInfo from "@/components/sections/JobsInfo";
import NavBar from "@/components/sections/NavBar";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Universities from "@/components/sections/Universities";

import VisaApproved from "@/components/sections/VisaApproved";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { Input } from "@/components/ui/input";

function page() {
  return (
    <div className="relative z-[1] h-full w-full">
      <BgLines />
      <NavBar />
      <Header />
      <About />
      <GermanLangCf />
      <CouncilLicense />
      <VisaApproved />
      <Services />
      <JobsInfo />
      <ApplyNow />
      <Universities />
      <ApplyNowInfo />
      <Team />
      <Testimonials />
      <div className=" w-full bg-blue-950 mt-24 h-auto">
        <div className="container py-10 grid lg:grid-cols-3 gap-20 ">
          <div className="">
            <h1 className="text-white font-bold text-3xl">About US</h1>
            <p className="text-white mt-10">
              We are an international recruiting company committed in helping
              people with medical care background to find and achieve
              appropriate employment abroad
            </p>
            <div className="flex justify-start items-center mt-10 gap-5">
              <div className=" w-10 h-10 flex justify-center items-center rounded-xl text-blue-950 bg-white shadow-xl">
                <FaFacebookF />
              </div>
              <div className=" w-10 h-10 flex justify-center items-center rounded-xl text-blue-950 bg-white shadow-xl">
                <RiInstagramFill />
              </div>
              <div className=" w-10 h-10 flex justify-center items-center rounded-xl text-blue-950 bg-white shadow-xl">
                <BsTwitterX />
              </div>
              <div className=" w-10 h-10 flex justify-center items-center rounded-xl text-blue-950 bg-white shadow-xl">
                <FaLinkedinIn />
              </div>
              <div className=" w-10 h-10 flex justify-center items-center rounded-xl text-blue-950 bg-white shadow-xl">
                <TfiYoutube />
              </div>
              <div className=" w-10 h-10 flex justify-center items-center rounded-xl text-blue-950 bg-white shadow-xl">
                <FaPinterestP />
              </div>
            </div>
            <p className="text-lg  text-white/80 mt-8 flex justify-start gap-3 items-center mb-10">
              <MdAlternateEmail />{" "}
              <span>info@goalcollectorimmigration.com</span>
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                "+91 9992666402",
                "+91 9992666403",
                "+91 9992666404",
                "+91 9992666405",
              ].map((e, i) => {
                return (
                  <p className="text-xl   text-white/80 mt-2 flex justify-start gap-3 items-center">
                    <LuPhone size={16} /> <span className="mb-2">{e}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-bold text-3xl">OUR LINKS</h1>
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                "home",
                "about",
                "services",
                "gallery",
                "jobs",
                "nursing job",
                "policies",
                "university",
                "Blogs",
                "contact us",
              ].map((e, i) => {
                return (
                  <p className="text-xl  capitalize text-white/80 ">{e}</p>
                );
              })}
            </div>
            <div className=" mt-8">
              <div className="flex justify-start items-center gap-5">
                <div className="w-10 h-10 bg-blue-900 shadow-md flex justify-center items-center rounded-md text-white">
                  <HiMiniBuildingOffice2 />
                </div>
                <p className="text-2xl  text-white">Head Office</p>
              </div>
              <p className="text-lg text-white mt-4">
                131, second floor, siddhi vinayak tower saraswati nagar near mr
                travels basni mandi mode, jodhpur rajsasthan 342001.
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-bold text-3xl uppercase">
              Subscribe
            </h1>
            <div className="mt-10">
              <div className="flex border border-blue-50/20">
                <Input
                  className="rounded-none bg-blue-900/30 border-none text-white h-12 border-blue-50/20 border-r"
                  placeholder="Email ID."
                />
                <Button className="rounded-none h-12 px-5">Subscribe</Button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-6">
              {Array.from({ length: 10 }).map((e) => {
                return (
                  <Image
                    src="https://watermark.lovepik.com/photo/50142/8042.jpg_wh1200.jpg"
                    width={100}
                    height={100}
                    alt=""
                    className="w-full h-16 object-cover "
                  />
                );
              })}
            </div>
            <div className=" mt-7">
              <div className="flex justify-start items-center gap-5">
                <div className="w-10 h-10 bg-blue-900 shadow-md flex justify-center items-center rounded-md text-white">
                  <HiMiniBuildingOffice2 />
                </div>
                <p className="text-2xl  text-white">Branch Office</p>
              </div>
              <p className="text-lg text-white mt-4">
                M-36, Old DLF Colony, Sector-14, Gurgaon (Delhi NCR) 122001
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-16 bg-blue-950 border-t border-blue-900">
          <div className="container h-full flex justify-center items-center">
            <p className="text-white/65 text-sm">
              © {new Date().getFullYear()} Goal Collector Immigration. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

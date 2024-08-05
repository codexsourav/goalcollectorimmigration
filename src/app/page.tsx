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
      <div className="pb-56"></div>
    </div>
  );
}

export default page;

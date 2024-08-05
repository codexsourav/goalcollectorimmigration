import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { LocateIcon } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { Button } from "../ui/button";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function MobMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu3Fill size={30} className="text-blue-700 lg:hidden" />
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <div className=" justify-start  items-start  text-xl text-gray-800 font-medium flex-col flex ">
          <NavLink
            href="/"
            className="navLink navLinkMob border-t mt-16 border-blue-950/10"
            exact
          >
            Home
          </NavLink>
          <NavLink href="#" className="navLink navLinkMob">
            About Us
          </NavLink>
          <NavLink href="#" className="navLink navLinkMob">
            Services
          </NavLink>
          <NavLink href="#" className="navLink navLinkMob">
            Blogs
          </NavLink>
          <NavLink href="#" className="navLink navLinkMob">
            Contacts
          </NavLink>
        </div>
        <div className="p-5">
          <div className="flex gap-2 mt-3">
            <div className="w-12">
              <FaLocationDot className="mt-2 text-blue-900" size={18} />
            </div>
            <p className="text-sm">
              131, second floor, siddhi vinayak tower saraswati nagar near mr
              travels basni mandi mode, jodhpur rajsasthan 342001.
            </p>
          </div>
          <div className="flex gap-1 mt-5">
            <div className="w-12">
              <FaLocationDot className="mt-1 text-blue-900" size={18} />
            </div>
            <p className="text-sm">
              M-36, Old DLF Colony, Sector-14, Gurgaon (Delhi NCR) 122001
            </p>
          </div>
          <div className="flex mt-5">
            <div className="w-9">
              <MdMarkEmailRead className=" text-blue-900" size={18} />
            </div>
            <p className="text-sm">info@goalcollectorimmigration.com</p>
          </div>
          <div className="flex mt-5">
            <div className="w-9">
              <PiPhoneCallFill className=" text-blue-900 mt-1" size={18} />
            </div>
            <p className="text-sm">+91 9992666402</p>
          </div>
          <Button className="uppercase w-full mt-10  font-bold rounded-none bg-blue-700 text-white md:w-44 md:py-6">
            BOOK NOW
            <MdOutlineArrowForwardIos className="ml-3" size={10} />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobMenu;

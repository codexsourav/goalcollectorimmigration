import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { NavLink } from "./NavLink";
import MobMenu from "./MobMenu";

function NavBar() {
  return (
    <div className="bg-white z-40  lg:h-20 h-16 w-full">
      <div className="container  h-full flex justify-between items-center gap-10 ">
        <div className="font-bold text-3xl text-blue-700 lg:w-44 xl:mr-28">
          LOGO
        </div>

        <div className=" justify-center h-full items-center gap-10 text-xl text-gray-800 font-medium lg:flex hidden">
          <NavLink href="/" className="navLink" exact>
            Home
          </NavLink>
          <NavLink href="#" className="navLink">
            About Us
          </NavLink>
          <NavLink href="#" className="navLink">
            Services
          </NavLink>
          <NavLink href="#" className="navLink">
            Blogs
          </NavLink>
          <NavLink href="#" className="navLink">
            Contacts
          </NavLink>
        </div>
        <MobMenu />
        <Button className="uppercase lg:flex hidden font-bold rounded-none bg-blue-700 text-white md:w-44 md:py-6">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}

export default NavBar;

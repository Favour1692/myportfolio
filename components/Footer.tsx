import React from "react";
import Link from "next/link";
import { logofont } from "@/font";
import Navdock from "./Navdock";

const Footer = () => {
  return (
    <footer className="bg-lightsurface dark:bg-darksurface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-2 lg:gap-4">
          <div className="pt-4">
            <Navdock />
          </div>

          <div
            className={`${logofont.className} antialiased text-2xl py-2 lg:py-4`}
          >
            <Link href="/" className="text-contrast font-semibold">
              <span className="text-brandaccent">fay</span>
              <span className="text-brandcontrast">techh.</span>
            </Link>
          </div>
        </div>
        <div className="w-fit mx-0 lg:mx-auto">
          <p>&copy; {new Date().getFullYear()} faytechh. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

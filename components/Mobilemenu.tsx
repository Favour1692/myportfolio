"use client";

import Link from "next/link";
import { navdata } from "@/constants";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { MobileMenuProps } from "@/type";

const Mobilemenu = ({ open, handleClick }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-50 overflow-hidden max-w-full"
        >
          {/* backdrop blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"
            onClick={handleClick}
          />
          {/* menu panel */}
          <div className="absolute top-0 left-0 h-auto w-full pt-20 pb-10 max-w-full bg-lightsurface dark:bg-darksurface shadow-lg flex flex-col gap-6 pl-12 z-20">
            {navdata.map((data) => {
              const isActive = pathname === data.href;
              return (
                <Link
                  key={data.id}
                  href={data.href}
                  onClick={handleClick}
                  className={`${isActive ? `border-b-3 border-b-brandaccent` : `border-b-0`} text-lighttext dark:text-darktext  hover:text-brandaccent/80 dark:hover:text-brandaccent/80 text-lg font-semibold w-fit`}
                >
                  {data.title}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobilemenu;

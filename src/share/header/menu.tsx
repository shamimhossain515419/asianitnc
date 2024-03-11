"use client";

import { NavbarItemInterface } from "@/types/navbarItem";
import { NavbarItem } from "@/utility/NavbarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Menu = ({ setActive, active }: any) => {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`${
          active
            ? "block animate_fadeInUpNavbar"
            : "animate_fadeOutDownNavbar hidden"
        }  lg:hidden fixed w-full h-screen z-50 !bg-[#171E37] px-5 py-4 pb-7`}
      >
        <div className="  flex flex-col gap-5">
          {/* navbar item maping  */}
          {NavbarItem?.map((item: NavbarItemInterface, index: number) => (
            <div key={index}>
              {" "}
              <Link
                onClick={() => setActive(false)}
                href={`${item?.path}`}
                className={`${
                  pathname == item?.path ? "text-secondary " : " "
                } inline-block group relative hover:text-secondary duration-500 text-[16px] font-medium uppercase  `}
              >
                {" "}
                {item?.name}
                <span
                  className={`${
                    pathname == item?.path ? "w-full " : " "
                  }ease absolute left-0 -bottom-1 h-0 w-0 border-b border-secondary transition-all duration-200 group-hover:w-full`}
                ></span>
              </Link>{" "}
            </div>
          ))}
          <div>
            <div>
              <Link
                onClick={() => setActive(false)}
                className=" bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] px-10 py-3 rounded-[4px]"
                href={"/contact"}
              >
                {" "}
                <span className="text-[18px] font-semibold">
                  {" "}
                  Contact{" "}
                </span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

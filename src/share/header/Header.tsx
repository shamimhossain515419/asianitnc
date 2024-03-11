"use client";
import React, { useState } from "react";
import logo from "../../../public/images/logo/asian it.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { NavbarItem } from "@/utility/NavbarItem";
import { NavbarItemInterface } from "@/types/navbarItem";
import Menu from "./menu";
const Header = () => {
  const pathname = usePathname();
  const [active, setActive] = useState<Boolean>(false);
  return (
    <>
      <div className="bg-[#171E37] sticky top-0 z-50  py-3 md:py-5 ">
        <div className="container">
          <div className="flex font-serif items-center gap-2 justify-between">
            <div className=" flex items-center gap-2 lg:gap-4">
              {/* logo and site  name  */}
              <Image
                className="h-[28px] w-[28px] md:h-[40px] md:w-[40px]"
                src={logo}
                alt="image"
              ></Image>
              <Link
                className="text-[15px] md:text-[20px] lg:text-[25px] font-medium uppercase"
                href={"/"}
              >
                {" "}
                ASIAN IT INC{" "}
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-4 lg:gap-10">
                {/* navbar item maping  */}
                {NavbarItem?.map((item: NavbarItemInterface, index: number) => (
                  <Link
                    key={index}
                    href={`${item?.path}`}
                    className={`${pathname == item?.path ? "text-primary" : " "
                      } group relative hover:text-primary duration-500 text-[16px] font-medium uppercase  `}
                  >
                    {item?.name}
                    <span
                      className={`${pathname == item?.path ? "w-full " : " "
                        } ease absolute left-0 -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full`}
                    ></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              {/* contact button  */}
              <div>
                <Link
                  className="bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] px-10 py-3 rounded-[4px]"
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
            {/* toggle menu bar  */}
            <div onClick={() => setActive(!active)} className="lg:hidden">
              <div>
                <FaBars />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* responsive menu bar */}
          <Menu active={active} setActive={setActive} />
        </div>
      </div>
    </>
  );
};

export default Header;

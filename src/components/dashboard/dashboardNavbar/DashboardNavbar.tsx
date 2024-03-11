"use client";

import Image from "next/image";
import Link from "next/link";
import image from "../../../../public/images/mumber/mumber1.png";
import logo from "../../../../public/images/logo/asian it.png";
import useBooleanStore from "@/store/AppStore";
const DashboardNavbar = () => {
  const toggleSitebarValue = useBooleanStore(
    (state: any) => state.toggleSitebarValue
  );
  const toggleSitebarHandler = useBooleanStore(
    (state: any) => state.toggleSitebarHandler
  );
  return (
    <div className="w-full">
      <header className="bg-[#1a2341] sticky top-0 z-50 text-white ">
        <div className="relative mx-auto   px-3 lg:px-5 ">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              href={"/dashboard"}
              className="flex items-center gap-2 text-white whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            >
              <Image
                className="h-[28px] w-[28px] md:h-[40px] md:w-[40px]"
                src={logo}
                alt="image"
              />
              ASIAN IT INC
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              onClick={toggleSitebarHandler}
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                            ${
                              toggleSitebarValue
                                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                : ""
                            }
                               `}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute  hidden  top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                toggleSitebarValue ? "visible opacity-100 backdrop-blur-sm" : ""
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  className="flex items-center gap-2 py-4 0 transition-colors duration-300 hover:text-secondary text-white focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/"
                >
                  <span>Client</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  className="flex text-white items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-secondary focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/about"
                >
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <a
                href="#"
                className="relative inline-flex w-[40px] h-[40px]  items-center justify-center rounded-full text-white"
              >
                <Image
                  src={image}
                  alt="user name"
                  title="user name"
                  width={40}
                  height={40}
                  className="  w-[40px] h-[40px] rounded-full"
                />
              </a>
              {/*        <!-- End Avatar --> */}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default DashboardNavbar;

"use client";
import useBooleanStore from "@/store/AppStore";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import {
    FaUserAltSlash,
    FaHome,
    FaServicestack,
    FaPassport,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { LuSliders } from "react-icons/lu";
import { GiWaterRecycling } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineSolution } from "react-icons/ai";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const DashboardSidebar = () => {
    const toggleSitebarValue = useBooleanStore(
        (state: any) => state.toggleSitebarValue
    );
    const handleLogout = () => {
        signOut();
        Cookies.remove('token')
        toast.success("logout successfully")
    }
    return (
        <>
            <div
                className={`${toggleSitebarValue
                    ? "block w-full sm:w-[360px]   left-0 fixed  "
                    : "hidden"
                    }    left-0  lg:relative border-slate-200  bg-[#171E37]  lg:block lg:w-[300px] overflow-hidden z-20 `}
            >
                <div
                    className={`shadow-md  h-screen  w-full left-0 lg:w-[300px] duration-500  bg-[#171E37] fixed  px-1 `}
                >
                    <div className=" py-2 space-y-3 ml-5">
                        <Link
                            href={"/dashboard/"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <FaHome size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                Home
                            </span>
                        </Link>
                        {/* users  */}
                        <Link
                            href={"/dashboard/users"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <FaUserAltSlash size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                users
                            </span>
                        </Link>
                        {/* Slider   */}
                        <Link
                            href={"/dashboard/slider"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <LuSliders size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Slider
                            </span>
                        </Link>
                        {/* Services  */}
                        <Link
                            href={"/dashboard/service"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <FaServicestack size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Services
                            </span>
                        </Link>
                        {/* Technology  */}
                        <Link
                            href={"/dashboard/technology"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <GrTechnology size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Technology
                            </span>
                        </Link>
                        {/* Sort Portfolio  */}
                        <Link
                            href={"/dashboard/portfolio"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <FaPassport size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Sort Portfolio
                            </span>
                        </Link>
                        <Link
                            href={"/dashboard/client"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <GiWaterRecycling size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Client
                            </span>
                        </Link>
                        <Link
                            href={"/dashboard/solution"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <AiOutlineSolution size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Solution
                            </span>
                        </Link>
                        <Link
                            href={"/dashboard/product"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <MdOutlineProductionQuantityLimits size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Product
                            </span>
                        </Link>
                        <Link
                            href={"/dashboard/team"}
                            className="  flex items-center justify-center gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        >
                            <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <RiTeamLine size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                {" "}
                                Team
                            </span>
                        </Link>
                        {/* logout button  */}
                        <div onClick={handleLogout} className="  cursor-pointer w-full flex items-center justify-start gap-3 rounded-lg py-3 px-2  text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-[#030334fc]"
                        > <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                                <CiLogout size={24} />
                            </span>
                            <span className=" flex-1   capitalize whitespace-nowrap">
                                logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;

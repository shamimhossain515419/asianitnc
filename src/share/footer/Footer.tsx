import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "../../../public/images/logo/asian it.png";
import locationImage from "../../../public/images/icons/location.png";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import FooterContactForm from "./FooterContactForm";
//  member  logo
import member1 from "../../../public/images/icons/member/member (1).png";
import member2 from "../../../public/images/icons/member/member (2).png";
import member3 from "../../../public/images/icons/member/member (3).png";
import Copyright from "./Copyright";
import { ServicesData } from "@/utility/ServicesData";
import { ResourcesData } from "@/utility/Resources";

const Footer = () => {
    return (
        <>
            <div className=" footer_bg pt-20 pb-5 ">
                <div className=" container">
                    {/* responsive grid  */}
                    <div className=" grid md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-7">
                        <div className="col-span-1 lg:col-span-2 overflow-hidden">
                            <div>
                                <div className=" flex items-center gap-2 lg:gap-4">
                                    {/* logo and site  name  */}
                                    <Image
                                        className="h-[28px] w-[28px] md:h-[40px] md:w-[40px]"
                                        src={logo}
                                        alt="image"
                                    ></Image>
                                    <Link
                                        className="text-[15px] md:text-[20px] lg:text-[25px]   font-medium uppercase"
                                        href={"/"}
                                    >
                                        {" "}
                                        ASIAN IT INC{" "}
                                    </Link>
                                </div>
                                <p className="text-[14px] tracking-wide leading-7 pt-7 font-normal">
                                    Asian IT is committed to delivering exceptional user
                                    experiences and assisting customers in transitioning their
                                    businesses to the digital era. Our proficient team of experts
                                    is fully equipped to offer customized solutions that cater to
                                    the specific requirements of each customer.
                                </p>
                                {/*social   media icons  */}
                                <div className=" py-5 flex  justify-between  flex-wrap">
                                    <Link
                                        href={"/"}
                                        className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex justify-center items-center border border-[#9339fb61]"
                                    >
                                        <FaFacebookF className="text-[17px] lg:text-[20px]" />
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex justify-center items-center border border-[#9339fb61]"
                                    >
                                        <FaXTwitter className="text-[17px] lg:text-[20px]" />
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex justify-center items-center border border-[#9339fb61]"
                                    >
                                        <FaLinkedinIn className="text-[17px] lg:text-[20px]" />
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex justify-center items-center border border-[#9339fb61]"
                                    >
                                        <FaInstagram className="text-[17px] lg:text-[20px]" />
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex justify-center items-center border border-[#9339fb61]"
                                    >
                                        <AiOutlineYoutube className="text-[17px] lg:text-[20px]" />
                                    </Link>
                                </div>
                                {/* Member of  */}
                                <div>
                                    <div className=" flex items-center gap-2">
                                        <h1 className="text-[20px]  font-medium">Member of</h1>
                                        <input
                                            type="text"
                                            className=" px-2 outline-0 bg-[#4743FF] py-[6px]"
                                            name=""
                                            id=""
                                        />
                                    </div>

                                    <div className=" flex items-center gap-2 h-[50px]  overflow-hidden  my-2">
                                        <Image
                                            className="  h-[55px] w-[100px]object-contain"
                                            src={member1}
                                            alt="image"
                                        />
                                        <div className=" bg-white">
                                            <Image
                                                className=" h-[55px] w-[100px] object-contain"
                                                src={member2}
                                                alt="image"
                                            />
                                        </div>
                                        <Image
                                            className=" h-[55px] w-[50px] object-contain"
                                            src={member3}
                                            alt="image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-1 lg:col-span-2">
                            {/* our services section  */}
                            <h1 className="text-[20px] relative inline-block font-semibold group">
                                {" "}
                                OUR SERVICES
                                <span
                                    className={` ease absolute left-0 -bottom-1    border-b-[3px] border-primary transition-all duration-200 w-[50%] group-hover:w-full  rounded-full`}
                                ></span>
                            </h1>
                            <div className=" pt-7">
                                <ul className=" space-y-2">
                                    {/* services data mapping  */}
                                    {
                                        ServicesData?.map((item) => <li key={item?.id} className=" flex items-center gap-2">
                                            <span className=" w-[8px] h-[8px] bg-white rounded-full"></span>
                                            <Link
                                                className="text-[15px]  hover:text-primary duration-200"
                                                href={`/${item?.path}`}
                                            >
                                                {item?.name}
                                            </Link>
                                        </li>)
                                    }


                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            {/* resources  section  */}
                            <h1 className=" text-[20px] relative inline-block group font-semibold ">
                                RESOURCES
                                {/* animation  border  */}
                                <span
                                    className={` ease absolute left-0 -bottom-1    border-b-[3px] border-primary transition-all duration-200 w-[50%] group-hover:w-full  rounded-full`}
                                ></span>
                            </h1>
                            <div className=" pt-7">
                                <ul className=" space-y-2">
                                    {/* resources point  */}

                                    {
                                        ResourcesData?.map((item) => <li key={item?.id} className=" flex items-center gap-2">
                                            <span className=" w-[8px] h-[8px] bg-white rounded-full"></span>
                                            <Link
                                                className="text-[15px]  hover:text-primary duration-200"
                                                href={`/${item?.path}`}
                                            >
                                                {item?.name}
                                            </Link>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className=" col-span-1 lg:col-span-2">
                            <div className=" flex justify-start items-center">
                                <h1 className=" text-[20px] relative inline-block group font-semibold text-center ">
                                    CONTACT US
                                    {/* animation  border  */}
                                    <span
                                        className={` ease absolute left-0 -bottom-1    border-b-[3px] border-primary transition-all duration-200 w-[50%] group-hover:w-full  rounded-full`}
                                    ></span>
                                </h1>
                            </div>

                            <div className=" pt-8">
                                <div className=" space-y-3">
                                    {/* location section  */}
                                    <div className=" flex items-center gap-3">
                                        <Image src={locationImage} alt="image"></Image>
                                        <div>
                                            <p className="text-[13px] font-normal">
                                                Plot 58 Gareeb-e-Nawaz{" "}
                                            </p>
                                            <p className="text-[13px] font-normal">
                                                Ave, Dhaka 1230, Bangladesh
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" flex items-center gap-3">
                                        {/* phone contact  */}
                                        <p className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex justify-center items-center border border-[#9339fb61]">
                                            <FiPhoneCall size={20} />
                                        </p>
                                        <div>
                                            <p className="text-[13px] font-normal">+8801723626707 </p>
                                            <p className="text-[13px] font-normal">+8801919626707</p>
                                        </div>
                                    </div>
                                    <div className=" flex items-center gap-3">
                                        {/* Email contact  */}
                                        <p className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex justify-center items-center border border-[#9339fb61]">
                                            <MdOutlineEmail size={20} />
                                        </p>
                                        <div>
                                            <p className="text-[13px] font-normal">
                                                asianitinc@gmail.com
                                            </p>
                                            <p className="text-[13px] font-normal">
                                                litonhossain98@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* contact form  */}
                                <FooterContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    );
};

export default Footer;

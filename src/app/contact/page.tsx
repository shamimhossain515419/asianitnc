import Image from "next/image";
import contactImage from "../../../public/images/icons/contact.png";
import ContactForm from "@/components/contact/ContactForm";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
const page = () => {
    return (
        <>
            <div className="container">
                <div className="py-[95px]">
                    {/* contact button  */}
                    <div className="flex justify-center items-center">
                        <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]">
                            <div className="bg-[#17026CFC] rounded-[8px] py-2 px-5 flex justify-center items-center gap-3">
                                <Image
                                    className="w-[38px] h-[38px]"
                                    src={contactImage}
                                    alt="image"
                                ></Image>
                                <p className="text-[17px] uppercase font-extrabold">
                                    {" "}
                                    Contact us
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* contact title  */}
                        <div className="py-[40px]">
                            <p className=" text-center text-[20px] lg:text-[28px] font-medium">
                                Fill in the below form to receive a detailed estimation. One of
                                our friendly team member will be in touch soon{" "}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-5 rounded-[20px]">
                            {/* contact input from  */}
                            <ContactForm />
                            <div className="border border-dashed  border-white rounded-[4px]">
                                {/* contact info  */}

                                <div className="pt-[48px] px-[25px] lg:px-[70px] xl:px-[100px]">
                                    <div className="text-center">
                                        <h1 className="text-[18px] uppercase lg:text-[24px] text-primary  font-extrabold ">
                                            Asian it inc
                                        </h1>
                                        <p className="text-[16px] font-medium py-[10px]">
                                            10th and 11 th Floor, Plot 58 Gareeb-e-Nawaz Ave, Dhaka
                                            1230, Bangladesh{" "}
                                        </p>
                                    </div>
                                    {/* Give us a call   */}
                                    <div className="text-center py-[25px]">
                                        <h1 className="text-[16px] lg:text-[20px] text-primary  font-extrabold ">
                                            {" "}
                                            Give us a call{" "}
                                        </h1>
                                        <p className=" pt-2 text-[16px] font-medium">
                                            +8801723626707
                                        </p>
                                        <p className=" text-[16px] font-medium">+8801723626707</p>
                                        {/* Give us a call   */}
                                    </div>
                                    {/* Give us a Email   */}
                                    <div className="text-center py-[25px]">
                                        <h1 className="text-[16px] lg:text-[20px] text-primary  font-extrabold ">
                                            {" "}
                                            Give us a Email{" "}
                                        </h1>
                                        <p className=" pt-5 text-[16px]  font-medium">
                                            asianitinc@gmail.com
                                        </p>
                                    </div>
                                    {/*   social  media icons  */}
                                    <div className="text-center py-[25px]">
                                        <h1 className="text-[16px] lg:text-[20px] text-primary  font-extrabold ">
                                            {" "}
                                            Follow us on -{" "}
                                        </h1>
                                        <div className="py-5 flex justify-center gap-[12px]  flex-wrap">
                                            <Link
                                                href={"/"}
                                                className="bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center border border-[#9339fb61]"
                                            >
                                                <FaFacebookF className="text-[17px] lg:text-[20px]" />
                                            </Link>
                                            <Link
                                                href={"/"}
                                                className="bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center border border-[#9339fb61]"
                                            >
                                                <FaXTwitter className="text-[17px] lg:text-[20px]" />
                                            </Link>
                                            <Link
                                                href={"/"}
                                                className=" bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center border border-[#9339fb61]"
                                            >
                                                <FaLinkedinIn className="text-[17px] lg:text-[20px]" />
                                            </Link>
                                            <Link
                                                href={"/"}
                                                className="bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center border border-[#9339fb61]"
                                            >
                                                <FaInstagram className="text-[17px] lg:text-[20px]" />
                                            </Link>
                                            <Link
                                                href={"/"}
                                                className="bg-[#15095F] hover:bg-gradient-to-b from-[#1EA0D9] to-[#9339FB] duration-500  p-2 rounded-full text-white w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center border border-[#9339fb61]"
                                            >
                                                <AiOutlineYoutube className="text-[17px] lg:text-[20px]" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;

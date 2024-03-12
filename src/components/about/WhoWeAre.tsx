import Image from "next/image";
import aboutimage from "../../../public/images/about/f813cde6fa555781b93ec4eb3efa856e.png";
import { FaCheck } from "react-icons/fa";
const WhoWeAre = () => {
    return (
        <>
            <div className=" container py-[84px]">
                {/* section title  */}
                <h1 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-center py-2 uppercase ">
                    Who We Are
                </h1>
                <div className=" grid lg:grid-cols-2 gap-5 lg:gap-7 py-4">
                    <div>
                        <p className="mx-auto  font-medium  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            ASIAN IT is a fast-growing software manufacturing company in
                            Bangladesh providing software and solutions to SMEs, NGOs,
                            government agencies, and private companies. Our team is highly
                            experienced in developing Web Applications and business software
                            solutions, like POS systems, inventory management, accounting,
                            ERP, E-commerce, custom solutions, etc. We build software to grow
                            our clients businesses.
                        </p>
                        {/* types  */}
                        <ul className=" space-y-2 pt-7">
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Specialized in multivendor e-commerce
                                </p>
                            </li>
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Android & iOS app development
                                </p>
                            </li>
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Web application development
                                </p>
                            </li>
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Custom software development
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* image  */}
                        <Image
                            className=" w-full  max-h-[400px]"
                            layout="responsive"
                            src={aboutimage}
                            alt="about"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoWeAre;

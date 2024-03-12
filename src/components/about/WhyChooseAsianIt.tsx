import Image from "next/image";
import whychoose from "../../../public/images/about/whychoose.png";
import { FaCheck } from "react-icons/fa";
const WhyChooseAsianIt = () => {
    return (
        <>
            <div className=" container py-[84px]">
                {/* choose title  */}
                <h1 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-center py-2 uppercase ">
                    Why Choose Asian it inc
                </h1>
                <div className=" grid lg:grid-cols-2 gap-5 lg:gap-7 py-4">
                    <div>
                        {/* choose  description   */}
                        <p className="mx-auto  font-medium  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At ASIAN IT, we understand that choosing a technology partner can
                            be a challenging task. Affordable pricing, on-time delivery, and
                            excellent customer service distinguish us from our competitors. It
                            is our goal to build long-term relationships with our clients, not
                            just to serve them as a service provider, but to become their
                            development partners. So when it comes to choosing a technology
                            partner, Sunshine IT is the right choice.
                        </p>
                        {/* types  */}
                        <ul className=" space-y-2 pt-7">
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Our Work Approach
                                </p>
                            </li>
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Our Work Experience
                                </p>
                            </li>
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Our Work Qualityt
                                </p>
                            </li>
                            <li className=" flex justify-start items-center  gap-2">
                                <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                    <FaCheck className="" />
                                </p>
                                <p className="text-start  normal-case text-[12px] lg:text-[16px]">
                                    Our Support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* choose image  */}
                        <Image
                            className=" w-full  max-h-[400px]"
                            layout="responsive"
                            src={whychoose}
                            alt="about"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseAsianIt;

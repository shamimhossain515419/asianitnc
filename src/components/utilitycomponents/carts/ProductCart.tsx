import Image from "next/image";
import image1 from "../../../../public/images/icons/services/image 17.png";
import ButtonWithLink from "../buttons/ButtonWithLink";
import { FaCheck } from "react-icons/fa";
const ProductCart = () => {
    return (
        <>
            <div className="rounded-[8px] w-full overflow-hidden mx-auto bg-gradient-to-t p-[1px] from-transparent to-[#9339FB]">
                <div className="px-[27px] py-[18px] w-full bg-[#0b0b2e] rounded-[8px]">
                    <div className=" text-center">
                        {/* product image  */}
                        <Image
                            className="block w-[47px] h-[47px] mx-auto"
                            src={image1}
                            alt="image"
                        ></Image>
                        <div>
                            {/* cart  title  */}
                            <h1 className="text-[13px] lg:text-[15px] uppercase font-extrabold py-[16px]">
                                HR MANAGEMENT SYSTEM
                            </h1>
                            {/* types  */}
                            <ul className=" space-y-2">
                                <li className=" flex justify-start items-center  gap-2">
                                    <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                        <FaCheck className="" />
                                    </p>
                                    <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                        RECRUITMENT MANAGEMENt
                                    </p>
                                </li>
                                <li className=" flex justify-start items-center  gap-2">
                                    <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                        <FaCheck className="" />
                                    </p>
                                    <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                        PAYROLL MANAGEMENT
                                    </p>
                                </li>
                                <li className=" flex justify-start items-center  gap-2">
                                    <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                        <FaCheck className="" />
                                    </p>
                                    <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                        EMPLOYEE MANAGEMENT
                                    </p>
                                </li>
                                <li className=" flex justify-start items-center  gap-2">
                                    <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                        <FaCheck className="" />
                                    </p>
                                    <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                        PERFORMANCE MANAGEMENT
                                    </p>
                                </li>
                                <li className=" flex justify-start items-center  gap-2">
                                    <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                        <FaCheck className="" />
                                    </p>
                                    <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                        SHIFT MANAGEMENT
                                    </p>
                                </li>
                                <li className=" flex justify-start items-center  gap-2">
                                    <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                        <FaCheck className="" />
                                    </p>
                                    <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                        ABSENCE MANAGEMENT
                                    </p>
                                </li>
                                <li className=" flex justify-start items-center  gap-2">
                                    <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                        <FaCheck className="" />
                                    </p>
                                    <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                        BENIFIT MANAGEMENT
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-[25px]">
                            {/* button  */}
                            <ButtonWithLink path="/" title="Learn more" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCart;

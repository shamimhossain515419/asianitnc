import Image from "next/image";
import React from "react";
import image1 from "../../../../public/images/icons/services/image 17.png";
import { IndustriesInterface } from "@/types/IndustriesInterface";
const IndustriesCart = ({ name, image }: IndustriesInterface) => {
    return (
        <>
            <div className=" rounded-[8px] overflow-hidden w-full mx-auto bg-gradient-to-b p-[1px] from-[#16167D] to-transparent">
                <div className=" p-6 w-full bg-[#0b0b2e] rounded-[8px]">
                    <div className=" flex flex-col min-h-[200px] justify-around text-center">
                        {/* industries image  */}
                        <Image
                            className=" w-[72px] h-[72px] block mx-auto"
                            src={image1}
                            alt="image"
                        ></Image>
                        <div>
                            {/* industries name  */}
                            <h1 className="text-[21px] font-extrabold py-2">{name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default IndustriesCart;

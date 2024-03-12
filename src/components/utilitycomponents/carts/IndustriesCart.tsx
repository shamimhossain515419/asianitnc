import Image from "next/image";
import React from "react";
import { SolutionInterface } from "@/types/SolutionInterface";
const IndustriesCart = ({ solution }: { solution: SolutionInterface }) => {
    return (
        <>
            <div className=" rounded-[8px] overflow-hidden w-full mx-auto bg-gradient-to-b p-[1px] from-[#16167D] to-transparent">
                <div className=" p-6 w-full bg-[#0b0b2e] rounded-[8px]">
                    <div className=" flex flex-col min-h-[200px] justify-around text-center">
                        {/* industries image  */}
                        <Image width={72} height={72}
                            className=" w-[72px] h-[72px] block mx-auto"
                            src={`/uploads/solution/${solution?.image}`}
                            alt="image"
                        ></Image>
                        <div>
                            {/* industries name  */}
                            <h1 className="text-[21px] font-extrabold py-2">{solution?.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default IndustriesCart;

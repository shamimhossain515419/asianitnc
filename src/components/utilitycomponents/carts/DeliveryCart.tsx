"use client"

import Counter from "@/components/counter/Counter";
import Image from "next/image";
import React from "react";
// import CountUp from "react-countup/build/CountUp";

const DeliveryCart = ({ item, activeView }: any) => {

    return (
        <>
            <div className=" hover:shadow-[0_10px_30px_rgba(147,_57,_251,_1)] duration-200 rounded-[8px] overflow-hidden mx-auto mt-10 bg-gradient-to-b p-[1px] from-[#2626dd] to-[#9339FB]">
                <div className="bg-gradient-to-b from-[#16167D] to-[#0B0B2E] p-8 rounded-[8px]">
                    <div>
                        <Image
                            className="w-[98px] h-[100px] block mx-auto"
                            src={item?.image}
                            alt="image"
                        ></Image>
                        <div className="text-[32px] font-extrabold text-[#26CBFF] text-center">
                            {
                                activeView && <h1> <Counter end={item?.quantity} />
                                    +</h1>
                            }

                        </div>
                        <p className="text-center text-[title] font-semibold">
                            {" "}
                            {item?.title}{" "}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeliveryCart;

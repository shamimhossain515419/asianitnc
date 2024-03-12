import { TechnologyInterface } from "@/types/Technology";
import Image from "next/image";
import React from "react";
const OutTechCart = ({ tech }: any) => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row   border-b py-7 border-[#ffffff78]">
        <h1 className="text-[23px] text-center lg:text-start pb-5 lg:pb-0  min-w-[190px] font-semibold capitalize">
          {" "}
          {/* tach type */}
          {tech?.type}{" "}
        </h1>
        <div className=" w-full grid grid-cols-3 lg:grid-cols-6 gap-5">
          {tech?.items?.map((item: TechnologyInterface, index: number) => (
            <div
              className="flex flex-col lg:flex-row justify-center items-center gap-2  "
              key={index}
            >
              {/* tach image */}
              <div className=" w-[70px] h-[70px] py-2 overflow-hidden">
                <Image
                  className=" h-full  w-full  object-fill"
                  width={50}
                  height={50}
                  src={`/uploads/technology/${item?.image}`}
                  alt="image"
                />
              </div>
              {/* tach title */}
              <p className=" capitalize"> {item?.title} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OutTechCart;

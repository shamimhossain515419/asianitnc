import { Tech } from "@/utility/OutTech";
import Image from "next/image";
import React from "react";
const OutTechCart = ({ tech }: any) => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row   border-b py-7 border-[#ffffff78]">
        <h1 className="text-[23px] text-center lg:text-start pb-5 lg:pb-0  min-w-[190px] font-semibold capitalize">
          {" "}
          {tech?.name}{" "}
        </h1>
        <div className=" w-full grid grid-cols-3 lg:grid-cols-6 gap-5">
          {tech?.techs?.map((item: Tech, index: number) => (
            <div
              className="flex flex-col lg:flex-row justify-center items-center gap-2  "
              key={index}
            >
              <Image
                className=" w-[36px]"
                src={item?.image}
                alt="image"
                layout="responsive"
              ></Image>
              <p> {item?.name} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OutTechCart;

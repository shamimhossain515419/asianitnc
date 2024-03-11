import { IoIosArrowDown } from "react-icons/io";
import React from "react";

import IndustriesCart from "@/components/utilitycomponents/carts/IndustriesCart";
import SecondarySectionTitle from "@/components/utilitycomponents/sectionTitle/SecondarySectionTitle";
const Industries = () => {
  return (
    <>
      <div className=" py-[54px] ">
        {/* section title  */}
        <SecondarySectionTitle
          name="Industries We provid"
          description={
            "Asian It Inc. is an IT company that specializes in providing customized software solutions to a wide range of industries and businesses. "
          }
        />
        <div className="pt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
          {/* services cart  */}
          <IndustriesCart name="E-commerce" image={""} />
          <IndustriesCart name="Software" image={""} />
          <IndustriesCart name="Health & Fitness" image={""} />
          <IndustriesCart name="Real Estate" image={""} />
          <IndustriesCart name="E-commerce" image={""} />
          <IndustriesCart name="Software" image={""} />
          <IndustriesCart name="Health & Fitness" image={""} />
          <IndustriesCart name="Real Estate" image={""} />
        </div>

        <div className="pb-10 pt-20">
          <div className="flex justify-center items-center">
            <button className="bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] justify-center flex items-center gap-2 px-[14px] py-[8px] rounded-[4px]">
              {" "}
              <span className="text-[16px] font-semibold">See more</span>
              {/* arrow icons  */}
              <IoIosArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;

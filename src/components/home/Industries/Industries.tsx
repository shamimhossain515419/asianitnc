"use client"
import { IoIosArrowDown } from "react-icons/io";
import IndustriesCart from "@/components/utilitycomponents/carts/IndustriesCart";
import SecondarySectionTitle from "@/components/utilitycomponents/sectionTitle/SecondarySectionTitle";
import { SolutionInterface } from "@/types/SolutionInterface";
import useSWR from "swr";
import { fetcher } from "@/utility/Fetcher";
import { useState } from "react";

const Industries = () => {
  const {
    data: SolutionData,
    error,
    isLoading,
    mutate,
  } = useSWR(`${process.env.BASE_URL}/api/solution`, fetcher);
  const [sctiveCart, setActiveCart] = useState(4)

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
          {
            SolutionData?.data?.slice(0, sctiveCart)?.map((solution: SolutionInterface) => <IndustriesCart key={solution?.id} solution={solution} />)
          }
        </div>
        {
          SolutionData?.data?.length > sctiveCart ? <div className="pb-10 pt-20">
            <div className="flex justify-center items-center">
              <button onClick={() => setActiveCart(sctiveCart + 4)} className="bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] justify-center flex items-center gap-2 px-[14px] py-[8px] rounded-[4px]">
                {" "}
                <span className="text-[16px] font-semibold">See more</span>
                {/* arrow icons  */}
                <IoIosArrowDown size={20} />
              </button>
            </div>
          </div> : null
        }

      </div>
    </>
  );
};

export default Industries;

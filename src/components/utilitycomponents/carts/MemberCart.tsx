import React from "react";
import Image from "next/image";
import { TeamInterface } from "@/types/TeamInterface";
const MemberCart = ({ team }: { team: TeamInterface }) => {
  return (
    <>
      <div className="h-[400px] flex flex-col justify-end  relative">
        <div className="rounded-[5px] relative h-[183px] w-full overflow-hidden mx-auto bg-gradient-to-b p-[1px] from-transparent to-[#9339FB]">
          <div className=" h-full px-[23px] rounded-[5px] flex flex-col  justify-end rounded-5 bg-gradient-to-b from-[#1586ff9a]  to-[#030334] overflow-hidden">
            <div className="pb-[20px]">
              {/* member name */}
              <h1 className="text-[16px] font-bold uppercase text-[#05BAE1] text-center">
                {team?.name}
              </h1>
              {/* member title  */}
              <p className="text-[12px] text-center font-bold pt-1">
                {team?.designations}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[315px] px-[28px] w-full absolute top-0 rounded-[4px]">
          <div className="h-full w-full  p-[2px] rounded-[4px] bg-gradient-to-t from-[#05BAE1] to-[#9339FB] cartShadow">
            <Image
              width={250}
              height={255}
              className="w-full h-full rounded-[4px]"
              src={`/uploads/team/${team?.image}`}
              alt="image"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCart;

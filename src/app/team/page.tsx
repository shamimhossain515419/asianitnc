import MemberCart from "@/components/utilitycomponents/carts/MemberCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container">
        <div className="py-[85px]">
          {/* section title  */}
          <PrimarySectionTitle
            name={"Our Services"}
            title={"OUR 15 TECH EXPERT READY FOR YOUR SERVICES"}
          />
          <div className="pt-[85px] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
            {/* services cart  */}
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
            <MemberCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

import ServicesCart from "@/components/utilitycomponents/carts/ServicesCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";
import React from "react";
const OurServices = () => {
  return (
    <>
      <div className="py-[85px]">
        {/* section title  */}
        <PrimarySectionTitle
          name={"Our Services"}
          title={"OUR 15 TECH EXPERT READY FOR YOUR SERVICES"}
        />
        <div className="pt-[70px] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
          {/* services cart  */}
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
        </div>
      </div>
    </>
  );
};

export default OurServices;

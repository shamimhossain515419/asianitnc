"use client";

import React, { useState } from "react";
import "./Delivery.css";
import { DeliveryData } from "@/utility/DeliveryData";
import { DeliveryInterface } from "@/types/DeliveryInterface";

import DeliveryCart from "@/components/utilitycomponents/carts/DeliveryCart";
import SecondarySectionTitle from "@/components/utilitycomponents/sectionTitle/SecondarySectionTitle";
const Delivering = () => {
  const [activeView, setActiveView] = useState(false);

  return (
    <>
      {/* <ScrollTrigger
        onEnter={() => setActiveView(true)}
        onExit={() => setActiveView(false)}
      > */}
      <div className="py-[85px] delivery_bg">
        <div className="container">
          {/* delivery title  */}
          <SecondarySectionTitle
            width={"w-full"}
            name="Results You Can Trust Delivering IT Solutions Globally"
            description="Asian IT deliver results to keep our clients stay ahead while building a sustainable and stress-free IT environment "
          />
          <div className=" pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
            {/* render delivery cart  */}
            {DeliveryData?.map((items: DeliveryInterface) => (
              <div key={items?.id}>
                <DeliveryCart activeView={activeView} item={items} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </ScrollTrigger> */}
    </>
  );
};

export default Delivering;

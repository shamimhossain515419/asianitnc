"use client";

import React, { useState } from "react";
import "./Delivery.css";
import DeliveryCart from "@/components/utilitycomponents/carts/DeliveryCart";
import SecondarySectionTitle from "@/components/utilitycomponents/sectionTitle/SecondarySectionTitle";
import { fetcher } from "@/utility/Fetcher";
import useSWR from "swr";
import { ShortPortfolioInterface } from "@/types/ShortPortfolio";
import ScrollTrigger from "react-scroll-trigger";
const Delivering = () => {
  const [activeView, setActiveView] = useState<any>(false);
  const {
    data: shortPortfolioData,

  } = useSWR(`${process.env.BASE_URL}/api/short-portfolio`, fetcher);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setActiveView(true)}
        onExit={() => setActiveView(false)}
      >
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
              {shortPortfolioData?.data?.map((items: ShortPortfolioInterface) => (
                <div key={items?.id}>
                  <DeliveryCart activeView={activeView} item={items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Delivering;

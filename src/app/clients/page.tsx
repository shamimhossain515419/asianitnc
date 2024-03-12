"use client";
import ClientCart from "@/components/utilitycomponents/carts/ClientCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";
import { ClientDataInterface } from "@/types/ClientInterface";
import { fetcher } from "@/utility/Fetcher";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useSWR from "swr";

const Page = () => {
  const [sctiveCart, setActiveCart] = useState(4);
  const {
    data: clientData,
    error,
    isLoading,
    mutate,
  } = useSWR(`${process.env.BASE_URL}/api/client`, fetcher);

  return (
    <>
      <div className="container">
        <div className="py-[85px]">
          {/* section title  */}
          <PrimarySectionTitle
            name={"OUR CLIENTSs"}
            title={"OWe have worked together on inspiring projects"}
          />
          <div className="pt-[85px] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
            {/* services cart  */}
            {clientData?.body
              ?.slice(0, sctiveCart)
              ?.map((client: ClientDataInterface) => (
                <ClientCart client={client} key={client?.id} />
              ))}
          </div>
          {/* see more button  */}
          {clientData?.body?.length > sctiveCart ? (
            <div className="pb-10 pt-20">
              <div className="flex justify-center items-center">
                <button
                  onClick={() => setActiveCart(sctiveCart + 4)}
                  className="bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] justify-center flex items-center gap-2 px-[14px] py-[8px] rounded-[4px]"
                >
                  {" "}
                  <span className="text-[16px] font-semibold">See more</span>
                  {/* arrow icons  */}
                  <IoIosArrowDown size={20} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Page;

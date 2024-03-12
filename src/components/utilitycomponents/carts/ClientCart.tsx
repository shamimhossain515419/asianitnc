import React from "react";
import Image from "next/image";
import { ClientDataInterface } from "@/types/ClientInterface";
const ClientCart = ({ client }: { client: ClientDataInterface }) => {
  return (
    <>
      <div className="shadow-[0_2px_5px_0px_rgba(147,_57,_251,_1)] h-full  rounded-[8px] p-[2px] cartShadow  bg-gradient-to-t from-transparent to-[#9339FB] overflow-hidden">
        <div className=" bg-[#0B0B2E] h-full overflow-hidden rounded-[8px]">
          <div className="h-[177.28px] w-full overflow-hidden">
            <Image
              width={200}
              height={177}
              layout="responsive"
              className="h-full w-full rounded-[8px]"
              src={`/uploads/client/${client?.image}`}
              alt="image"
            ></Image>
          </div>
          <div className="py-[20px] text-center">
            <h1 className="text-[15px] font-bold text-[#05BAE1] uppercase">
              {client?.name}
            </h1>
            <p className="text-[12px] font-medium uppercase pt-[5px]">
              {client?.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCart;

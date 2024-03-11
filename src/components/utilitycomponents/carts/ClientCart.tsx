import React from "react";
import Image from "next/image";
const ClientCart = () => {
  return (
    <>
      <div className="shadow-[0_2px_5px_0px_rgba(147,_57,_251,_1)] rounded-[8px] p-[2px] cartShadow  bg-gradient-to-t from-transparent to-[#9339FB] overflow-hidden">
        <div className=" bg-[#0B0B2E] overflow-hidden rounded-[8px]">
          <div className="h-[177.28px] w-full overflow-hidden">
            <Image
              width={200}
              height={177}
              layout="responsive"
              className="h-full w-full rounded-[8px]"
              src={
                "https://www.asianitinc.com/frontend/assets/img/portfolio/img35.jpg"
              }
              alt="image"
            ></Image>
          </div>
          <div className="py-[20px] text-center">
            <h1 className="text-[15px] font-bold text-[#05BAE1] uppercase">
              MOULANA BHASANI COLLAGE
            </h1>
            <p className="text-[12px] font-medium uppercase pt-[5px]">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCart;

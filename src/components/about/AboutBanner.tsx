import Image from "next/image";
import React from "react";

const AboutBanner = () => {
    return (
        <>
            <div className="  relative w-full ">
                {/* about banner image  */}
                <Image
                    className=" w-full h-[600px]   object-cover "
                    width={1000}
                    height={600}
                    src={
                        "https://www.asianitinc.com/frontend/assets/img/main-banner/3.jpg"
                    }
                    alt="image"
                ></Image>
                {/* about banner content  */}
                <div className="  bg-gradient-to-b   from-[#020d12aa]  to-[#0f041cb4]  flex justify-center  bg-transparent items-center h-full   w-full absolute top-0">
                    <div className="text-center text-white max-w-[800px] mx-auto ">
                        <h1 className="text-[20px] font-extrabold tracking-tighter sm:text-[25px] md:text-[34px]">
                            ABOUT US
                        </h1>
                        <p className="mx-auto  font-medium  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                            ASIAN IT is a reputable software company with years of rich
                            experience developing web design development and software for
                            their customers on demand.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutBanner;

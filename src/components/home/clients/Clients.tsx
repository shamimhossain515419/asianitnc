"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { ClientDataInterface, ClientInterface } from "@/types/ClientInterface";
import useSWR from "swr";
import { fetcher } from "@/utility/Fetcher";
const Clients = () => {

    const {
        data: clientData,
        error,
        isLoading,
        mutate,
    } = useSWR(`${process.env.BASE_URL}/api/client`, fetcher);
    // custom Prev Button
    const customPrevButton = (
        <div className="custom-swiper-button-prev-category bg-gradient-to-b from-[#1EA0D9] to-[#9339FB]  w-7 lg:w-10  h-7  lg:h-10 rounded-full flex items-center justify-center">
            <span className=" text-white  ">
                <IoIosArrowBack className="text-[16px] lg:text-[24px]" />
            </span>
        </div>
    );
    // custom Next Button
    const customNextButton = (
        <div className="custom-swiper-button-next-category bg-gradient-to-b from-[#1EA0D9] to-[#9339FB]  w-7 lg:w-10  h-7  lg:h-10 rounded-full flex items-center justify-center">
            <span className=" text-white">
                <IoIosArrowForward className="text-[16px] lg:text-[24px]" />
            </span>
        </div>
    );
    return (
        <>
            <div className=" py-6 relative">
                <h1 className="text-center text-[20px] md:text-[25px] lg:text-[35px] py-4 font-extrabold">
                    Trusted Clients and Partners{" "}
                </h1>
                <div className="relative py-10 mx-4">
                    {/* use swiper slider  */}
                    <Swiper
                        //  setting swiper
                        navigation={{
                            prevEl: ".custom-swiper-button-prev-category",
                            nextEl: ".custom-swiper-button-next-category",
                        }}
                        loop={true}
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 8,
                            },
                            1440: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="relative  overflow-hidden w-[92%]"
                    >
                        {clientData?.body?.map((client: ClientDataInterface, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="h-[120px]  overflow-hidden">
                                    <Image width={120} height={150}
                                        className="object-contain h-full"
                                        src={`/uploads/client/${client?.image}`}
                                        alt="image"
                                    ></Image>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom navigation buttons */}
                    <div className="absolute flex justify-center items-center top-0 h-full w-full ">
                        <div className="flex justify-between items-center w-full">
                            <div className="custom-swiper-button-prev-category cursor-pointer absolute top-0 left-0 flex items-center h-full z-40">
                                {/* call  pre button  */}
                                {customPrevButton}
                            </div>
                            <div className="custom-swiper-button-next-category cursor-pointer absolute top-0 right-0 flex items-center h-full z-40">
                                {/* call  Next button  */}
                                {customNextButton}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clients;

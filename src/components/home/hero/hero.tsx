"use client";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import banner from "../../../../public/images/hero/hero.jpg";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="  relative">
        {/* use swiper slider  */}
        <Swiper
          navigation={{
            prevEl: ".custom-swiper-button-prev-category",
            nextEl: ".custom-swiper-button-next-category",
          }}
          //  setting swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper"
        >
          {/* single slider  */}
          <SwiperSlide>
            <div className="max-h-[800px] w-full">
              <Image
                className="w-full h-full"
                layout="responsive"
                src={banner}
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-h-[800px] w-full">
              <Image
                className="w-full h-full"
                layout="responsive"
                src={banner}
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-h-[800px] w-full">
              <Image
                className="w-full h-full"
                layout="responsive"
                src={banner}
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-h-[800px] w-full">
              <Image
                className="w-full h-full"
                layout="responsive"
                src={banner}
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-h-[800px] w-full">
              <Image
                className="w-full h-full"
                layout="responsive"
                src={banner}
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation buttons */}
        <div className=" md:block hidden  ">
          <div className="custom-swiper-button-prev-category cursor-pointer absolute top-0 left-5 flex items-center h-full z-40">
            <div className=" bg-gradient-to-l from-[#1EA0D9] to-[#9339FB] w-[40px] h-[40px] rounded-full hover:opacity-70 flex justify-center items-center lg:py-[10px]">
              <div className=" bg-transparent">
                <IoIosArrowForward className=" text-[15px] lg:text-[20px] rotate-180 " />
              </div>
            </div>
          </div>
          <div className="custom-swiper-button-next-category cursor-pointer absolute top-0 right-5 flex items-center h-full z-40">
            <div className="bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] w-[40px] h-[40px] rounded-full hover:opacity-70 flex justify-center items-center lg:py-[10px]">
              <div className=" bg-transparent">
                <IoIosArrowForward className=" text-[15px] lg:text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

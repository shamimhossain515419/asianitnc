import Image from "next/image";
import image1 from "../../../../public/images/icons/services/image 3.png";
import ButtonWithLink from "@/components/utilitycomponents/buttons/ButtonWithLink";
import { serviceInterface } from "@/types/ServiceInterface";

const ServicesCart = ({ service }: { service: serviceInterface }) => {
  return (
    <>
      <div className="relative h-full">
        <div className="cartShadow opacity-85 h-full hover:opacity-100 duration-200 rounded-[8px] relative w-full overflow-hidden mx-auto bg-gradient-to-b p-[1px] from-transparent to-[#9339FB]">
          <div className="py-6 w-full bg-[#0b0b2e]  h-full   rounded-[8px]">
            <div className=" text-center">

              <div className="w-[80px] h-[80px] mx-auto">
                <Image
                  className=" block mx-auto object-contain w-full h-full"
                  src={`/uploads/services/${service?.image}`}
                  width={80}
                  height={80}
                  layout="responsive"
                  alt=""
                />
              </div>

              <div>
                <h1 className="text-[21px] px-1 font-extrabold py-2">
                  {service?.title}
                </h1>
                <p className="text-[13px] px-6 font-normal tracking-[0.5px] leading-[22px]">
                  {service?.description}
                </p>
              </div>
              <div className="pt-5">
                <ButtonWithLink path={`/${service?.link}`} title="Learn more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCart;

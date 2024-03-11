import Image from "next/image";
import image1 from "../../../../public/images/icons/services/image 3.png";
import ButtonWithLink from "@/components/utilitycomponents/buttons/ButtonWithLink";

const ServicesCart = () => {
  return (
    <>
      <div className="relative">
        <div className="cartShadow opacity-85 hover:opacity-100 duration-200 rounded-[8px] relative w-full overflow-hidden mx-auto bg-gradient-to-b p-[1px] from-transparent to-[#9339FB]">
          <div className="p-6 w-full bg-[#0b0b2e]  rounded-[8px]">
            <div className=" text-center">
              <Image className="block mx-auto" src={image1} alt="image"></Image>
              <div>
                <h1 className="text-[21px] font-extrabold py-2">
                  Web Development
                </h1>
                <p className="text-[13px] f ont-normal tracking-[0.5px] leading-[22px]">
                  Develop robust online applications to suit your business needs
                  and cater to your clients faithfully.
                </p>
              </div>
              <div className="pt-5">
                <ButtonWithLink path="/" title="Learn more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCart;

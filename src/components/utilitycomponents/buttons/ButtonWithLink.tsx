import { ButtonLinkInterface } from "@/types/buttons";
import Link from "next/link";
import { PiArrowElbowRightBold } from "react-icons/pi";
const ButtonWithLink = ({ path, title }: ButtonLinkInterface) => {
  return (
    <>
      <div className="inline-block">
        <Link
          className="bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] justify-center flex items-center gap-2 px-[14px] py-[6px] rounded-[4px]"
          href={path}
        >
          <span className="text-[14px] font-medium">{title}</span>
          {/* arrow icons  */}
          <PiArrowElbowRightBold size={16} />
        </Link>
      </div>
    </>
  );
};

export default ButtonWithLink;

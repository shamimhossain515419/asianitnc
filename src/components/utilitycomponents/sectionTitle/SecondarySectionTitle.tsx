import { SecondarySectionTitleInterface } from "@/types/sectiontitleInterface";

const SecondarySectionTitle = ({
  name,
  width,
  description,
}: SecondarySectionTitleInterface) => {
  return (
    <>
      <div className={` ${width ? width : "max-w-[950px]"} mx-auto `}>
        <div className="text-center space-y-1">
          {/* section name  */}
          <h1 className="uppercase text-[20px] md:text-[25px] lg:text-[32px] font-extrabold">
            {" "}
            {name}{" "}
          </h1>
          {/* section description  */}
          <p className=" text-[16px] lg:text-[20px] tracking-[0.4px] font-medium">
            {" "}
            {description}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondarySectionTitle;

import { PrimarySectionTitleInterface } from "@/types/sectiontitleInterface";

const PrimarySectionTitle = ({ name, title }: PrimarySectionTitleInterface) => {
  return (
    <>
      <div className="text-center space-y-2">
        {/* section name  */}
        <p className=" uppercase text-[16px] lg:text-[20px] font-medium">
          {" "}
          {name}{" "}
        </p>
        {/* section title  */}
        <h1 className="uppercase text-[20px] md:text-[25px] lg:text-[32px] font-extrabold">
          {" "}
          {title}{" "}
        </h1>
      </div>
    </>
  );
};

export default PrimarySectionTitle;

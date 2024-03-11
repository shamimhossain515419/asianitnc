import { OurTechData, TechInterface } from "@/utility/OutTech";
import OutTechCart from "./OutTechCart";

const OurTech = () => {
    return (
        <>
            <div className=" py-2">
                {/* section title  */}
                <div className=" flex justify-center items-center">
                    <h1 className="uppercase text-center  text-[20px] inline-block md:text-[25px] lg:text-[32px] font-extrabold">
                        {" "}
                        Our Tech Stacks
                        <span className="block border border-white w-full"></span>{" "}
                    </h1>
                </div>
                <div className=" py-10">
                    {OurTechData?.map((tech: TechInterface, index: number) => (
                        <OutTechCart key={index} tech={tech}></OutTechCart>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurTech;

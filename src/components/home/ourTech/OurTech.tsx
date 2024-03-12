import OutTechCart from "./OutTechCart";
import { TechnologyInterface } from "@/types/Technology";
const fetchData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/technology`);
    const technology = await res.json();
    return technology?.body;
};
const OurTech = async () => {
    const technology = await fetchData();
    // Function to create an object with arrays grouped by type
    const groupDataByType = (data: TechnologyInterface[]) => {
        const groupedData: Record<string, TechnologyInterface[]> = {};

        data.forEach((item) => {
            const { type } = item;
            if (!groupedData[type]) {
                groupedData[type] = [];
            }
            groupedData[type].push(item);
        });

        return groupedData;
    };

    // Create an object with arrays grouped by type
    const groupedData = groupDataByType(technology);

    const groupedDataArray: any = Object.keys(groupedData).map((type) => ({
        type,
        items: groupedData[type],
    }));

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
                    {groupedDataArray?.map((tech: any, index: number) => (
                        <OutTechCart key={index} tech={tech}></OutTechCart>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurTech;

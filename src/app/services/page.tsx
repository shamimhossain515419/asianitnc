import ServicesCart from "@/components/utilitycomponents/carts/ServicesCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";
import { serviceInterface } from "@/types/ServiceInterface";
const fetchData = async () => {
  const res = await fetch(`http://localhost:3000/api/service`, {
    next: { revalidate: 300 },
  })
  const services = await res.json();
  return services?.data

}
const Page = async () => {
  const services = await fetchData()
  return (
    <>
      <div className="container">
        <div className="py-[85px]">
          {/* section title  */}
          <PrimarySectionTitle
            name={"Our Services"}
            title={"OUR 15 TECH EXPERT READY FOR YOUR SERVICES"}
          />
          <div className="pt-[70px] grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-8 ">
            {/* services cart  */}
            {
              services?.map((service: serviceInterface) => <ServicesCart key={service?.id} service={service} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

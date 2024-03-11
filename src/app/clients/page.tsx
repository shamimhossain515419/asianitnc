import ClientCart from "@/components/utilitycomponents/carts/ClientCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";

const page = () => {
  return (
    <>
      <div className="container">
        <div className="py-[85px]">
          {/* section title  */}
          <PrimarySectionTitle
            name={"OUR CLIENTSs"}
            title={"OWe have worked together on inspiring projects"}
          />
          <div className="pt-[85px] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
            {/* services cart  */}
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
            <ClientCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

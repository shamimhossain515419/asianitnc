import ProductCart from "@/components/utilitycomponents/carts/ProductCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";

const page = () => {
  return (
    <>
      <div className="container">
        <div className="py-[85px]">
          {/* section title  */}
          <PrimarySectionTitle
            name={"OUR PRODUCTS"}
            title={"Choose a product according to your needs"}
          />
          <div className="pt-[85px] grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-[17px]">
            {/* Prodcut cart  */}
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

"use client"
import ProductCart from "@/components/utilitycomponents/carts/ProductCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";
import { ProductInterface } from "@/types/ProductInterface";
import { fetcher } from "@/utility/Fetcher";
import useSWR from "swr";

const Page = () => {
  const {
    data: ProductData,
    error,
    isLoading,
    mutate,
  } = useSWR(`${process.env.BASE_URL}/api/product`, fetcher);

  return (
    <>
      <div className="container">
        <div className="py-[85px]">
          {/* section title  */}
          <PrimarySectionTitle
            name={"OUR PRODUCTS"}
            title={"Choose a product according to your needs"}
          />
          <div className="pt-[85px] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
            {/* Prodcut cart  */}
            {
              ProductData?.data?.map((product: ProductInterface) => <ProductCart product={product} key={product?.id} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

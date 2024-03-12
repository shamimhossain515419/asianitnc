import Image from "next/image";
import ButtonWithLink from "../buttons/ButtonWithLink";
import { FaCheck } from "react-icons/fa";
import { PointListInterface, ProductInterface } from "@/types/ProductInterface";
const ProductCart = ({ product }: { product: ProductInterface }) => {
    return (
        <>
            <div className="rounded-[8px] w-full overflow-hidden mx-auto bg-gradient-to-t p-[1px] from-transparent to-[#9339FB]">
                <div className="px-[27px] relative py-[18px] h-full w-full bg-[#0b0b2e] rounded-[8px]">
                    <div className=" text-center pb-12">
                        {/* product image  */}
                        <Image
                            width={47}
                            height={47}
                            className="block w-[47px] h-[47px] mx-auto"
                            src={`/uploads/product/${product?.image}`}
                            alt="image"
                        ></Image>
                        {/* cart  title  */}
                        <h1 className="text-[13px] lg:text-[15px] uppercase font-extrabold py-[16px]">
                            {product?.title}
                        </h1>
                        <div className="">
                            {/* types  */}
                            <ul className="space-y-2 pb-3">
                                {product?.Point_list?.map((point: PointListInterface) => (
                                    <li
                                        key={point?.id}
                                        className=" flex justify-start items-center  gap-2"
                                    >
                                        <p className="bg-[#3EFF7E] text-white w-[20px] h-[20px] rounded-full flex justify-center items-center p-1">
                                            <FaCheck className="" />
                                        </p>
                                        <p className="text-start uppercase text-[10px] lg:text-[12px]">
                                            {point?.title}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                    <div className=" absolute bottom-6">
                        {/* button  */}
                        <ButtonWithLink path="/" title="Learn more" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCart;

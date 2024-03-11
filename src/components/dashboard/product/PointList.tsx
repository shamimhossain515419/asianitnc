import CommonModal from "@/components/utilitycomponents/commonModal/CommonModal";
import { PointListInterface } from "@/types/ProductInterface";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { DeletePointList } from "./DeletePointList";
import useSWR from "swr";
import { fetcher } from "@/utility/Fetcher";

const PointList = ({ active, setActive }: any) => {
    const [openModal, setOpenModal] = useState<PointListInterface>();
    const { data: PointList, mutate } = useSWR(
        `${process.env.BASE_URL}/api/product/point/all?product_id=${active?.id}`,
        fetcher
    );
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const addPointListHandler = async (data: any) => {
        const submitData = {
            title: data.title,
            product_id: active?.id,
        };

        const res = await fetch(`${process.env.BASE_URL}/api/product/point`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submitData),
        });
        const result = await res.json();
        if (result.status === "success") {
            toast.success(result?.message);
            setActive(false);
            reset();
            return;
        } else {
            toast.error("Failed to Add Portfolio");
            setActive(false);
        }
    };

    return (
        <>
            <CommonModal active={active} setActive={setActive}>
                <DeletePointList
                    mutate={mutate}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                />
                <div className="text-white">
                    <h1 className="text-[20px] font-semibold"> Point list </h1>
                    <div className="pt-3">
                        {/* mapping point list  */}
                        {PointList?.data?.map((list: PointListInterface, index: number) => (
                            <div className="  flex justify-between items-center" key={index}>
                                <h1 className="text-[18px]  py-1">
                                    {" "}
                                    {index + 1}. {list?.title}{" "}
                                </h1>
                                <div
                                    onClick={() => setOpenModal(list)}
                                    className="text-white hover:text-red-500 cursor-pointer "
                                >
                                    {/* delete button  */}
                                    <IoClose className=" text-[24px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="text-[19px] font-medium flex  pt-4 pb-1 text-white">
                    Add new Product
                </h1>
                <form
                    action=""
                    onSubmit={handleSubmit(addPointListHandler)}
                    className=""
                >
                    <div className="relative  rounded-lg mt-4 ">
                        <input
                            className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="text"
                            placeholder=""
                            {...register("title", { required: true })}
                        />
                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            Title
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="text-xl w-32 h-10 mt-5 rounded-lg bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                    >
                        <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                        <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                        Submit
                    </button>
                </form>
            </CommonModal>
        </>
    );
};

export default PointList;

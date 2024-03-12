"use client";
import CommonModal from "@/components/utilitycomponents/commonModal/CommonModal";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const AddClient = ({ mutate }: any) => {
    //  status
    const [active, setActive] = useState(false);
    const [image, setImage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    //  add client function
    const addClientHandler = async (data: any) => {
        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("location", data?.location);
        formData.append("userID", "1");
        formData.append("image", image);
        const res = await fetch(`${process.env.BASE_URL}/api/client`, {
            method: "POST",
            body: formData,
        });
        const result = await res.json();
        if (result.status === "success") {
            toast.success(result?.message);
            mutate();
            setActive(false);
            reset();
            return;
        } else {
            toast.error("Failed to Add  client");
            setActive(false);
        }
    };
    return (
        <>
            {/* action button  */}
            <button
                onClick={() => setActive(!active)}
                className=" bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]   flex justify-center  items-center capitalize  gap-2 px-[14px] py-[6px] rounded-[4px] "
            >
                <FaPlus className=" text-[20px]" />{" "}
                <span className=" text-[17px]"> Add new Client</span>
            </button>

            <CommonModal active={active} setActive={setActive}>
                <h1 className="text-[19px] font-medium flex pb-2 text-white">
                    Add new Client
                </h1>
                <form onSubmit={handleSubmit(addClientHandler)} action="" className="">
                    {/* Enter input name  */}
                    <div className="relative  rounded-lg mt-4 ">
                        <input
                            className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="text"
                            placeholder=""
                            {...register("name", { required: true })}
                        />
                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            name
                        </label>
                    </div>
                    <div className="relative  rounded-lg mt-4 ">
                        {/* Enter input location  */}
                        <input
                            className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="text"
                            placeholder=""
                            {...register("location", { required: true })}
                        />
                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            location
                        </label>
                    </div>
                    <div className="relative  rounded-lg mt-4 ">
                        {/* Enter input image  */}
                        <input
                            className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="file"
                            placeholder=""
                            onChange={(event: any) => setImage(event.target.files[0])}
                        />
                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            Image
                        </label>
                    </div>
                    {/* submit action button  */}
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

export default AddClient;

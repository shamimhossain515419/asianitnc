"use client";
import CommonModal from "@/components/utilitycomponents/commonModal/CommonModal";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const AddSlider = ({ mutate }: any) => {
    const { data: session, status } = useSession();
    console.log(session);

    const [active, setActive] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.files[0];
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("userID", "2");
        try {
            const response = await fetch(`${process.env.BASE_URL}/api/slider`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                if (data.code === 200) {
                    toast.success(data?.message);
                    setActive(false);
                    mutate();
                    form.reset();
                } else {
                    toast.error("Upload failed");
                    setActive(false);
                }
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Failed to upload:", error);
            toast.error("Failed to upload");
            setActive(false);
        }
    };

    return (
        <>
            {/* add slider action button  */}
            <button
                onClick={() => setActive(!active)}
                className=" bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]   flex justify-center  items-center capitalize  gap-2 px-[14px] py-[6px] rounded-[4px] "
            >
                <FaPlus className=" text-[20px]" />{" "}
                <span className=" text-[17px]"> add new Slider</span>
            </button>

            <CommonModal active={active} setActive={setActive}>
                <h1 className="text-[18px] font-medium flex pb-2 text-white">
                    Add new Slider
                </h1>
                <form onSubmit={handleSubmit} action="" className="">
                    <div className="relative  rounded-lg ">
                        {/* input slider image  */}
                        <input
                            className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="file"
                            placeholder=""
                            name="photo"
                        />
                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            Input slider image
                        </label>
                    </div>
                    {/* submit handler  */}
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

export default AddSlider;

"use client";
import CommonModal from "@/components/utilitycomponents/commonModal/CommonModal";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateClient = ({ setUpdateModal, updateModal, mutate }: any) => {
    const [image, setImage] = useState(updateModal?.image);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    //  update client function
    const UpdateClientHandler = (data: any) => {
        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("location", data?.location);
        formData.append("userID", "1");
        formData.append("image", image);

        fetch(`${process.env.BASE_URL}/api/client?id=${updateModal?.id}`, {
            method: "PUT",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.status === "success") {
                    toast.success(data?.message);
                    mutate();
                    setUpdateModal();
                    reset();
                } else {
                    toast.error("Failed to Add technology");
                    setUpdateModal();
                }
            })
            .catch((errors) => {
                toast.error("Failed to technology");
                setUpdateModal(false);
            });
    };

    return (
        <>
            <CommonModal active={updateModal} setActive={setUpdateModal}>
                <h1 className="text-[19px] font-medium flex pb-2 text-white">
                    Add new Technology
                </h1>
                <form
                    onSubmit={handleSubmit(UpdateClientHandler)}
                    action=""
                    className=""
                >
                    <div className="relative  rounded-lg mt-4 ">
                        {/* Enter input name  */}
                        <input
                            className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="text"
                            placeholder=""
                            defaultValue={updateModal?.name}
                            {...register("name", { required: true })}
                        />
                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative  rounded-lg mt-4 ">
                        {/* Enter input location  */}
                        <input
                            className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="text"
                            placeholder=""
                            defaultValue={updateModal?.location}
                            {...register("location", { required: true })}
                        />
                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            Loation
                        </label>
                    </div>

                    <div>
                        {/* show image  */}
                        <div className=" w-full h-[200px] py-2 overflow-hidden">
                            <Image
                                className=" h-full  w-full  object-contain"
                                width={100}
                                layout="responsive"
                                height={80}
                                src={`/uploads/client/${updateModal?.image}`}
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="relative  rounded-lg mt-4 ">
                        {/* Enter input image  */}
                        <input
                            className="peer  w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
                            type="file"
                            placeholder=""
                            id="image"
                            onChange={(event: any) => setImage(event.target.files[0])}
                        />

                        <label
                            className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                            htmlFor=""
                        >
                            Image
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
export default UpdateClient;

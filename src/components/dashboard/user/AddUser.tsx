"use client";
import CommonModal from "@/components/utilitycomponents/commonModal/CommonModal";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const AddUser = ({ mutate }: any) => {
  const [active, setActive] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //    add submit handler

  const addUserHandler = (data: any) => {
    fetch(`${process.env.BASE_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data?.message);
          setActive(false);
          reset();
          mutate();
        } else {
          toast.error("Failed to register");
          setActive(false);
        }
      })
      .catch((errors) => {
        toast.success("Failed to register");
        setActive(false);
      });
  };

  return (
    <>
      <button
        onClick={() => setActive(!active)}
        className=" bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]   flex justify-center  items-center capitalize  gap-2 px-[14px] py-[6px] rounded-[4px] "
      >
        <FaPlus className=" text-[20px]" />{" "}
        <span className=" text-[17px]"> add new user</span>
      </button>
      <CommonModal active={active} setActive={setActive}>
        <h1 className="text-[18px] font-medium flex pb-2 text-white">User</h1>
        <form onSubmit={handleSubmit(addUserHandler)} action="" className="">
          <div className="relative  rounded-lg ">
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
              Name
            </label>
          </div>

          <div className="relative  rounded-lg mt-4 ">
            <input
              className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
              type="text"
              placeholder=""
              {...register("email", { required: true })}
            />
            <label
              className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor=""
            >
              Email
            </label>
          </div>
          <div className="relative  rounded-lg mt-4 ">
            <input
              className="peer w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
              type="password"
              placeholder=""
              {...register("password", { required: true })}
            />
            <label
              className="absolute -top-2 left-[10px] bg-[#1B8EF8]  px-2 text-xs text-white duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor=""
            >
              Password
            </label>
          </div>
          <div className="w-full  mt-4">
            <select
              className="peer inline-block w-full rounded-lg border border-[#1B8EF8] px-4 py-2 text-white focus:outline-none bg-transparent"
              {...register("role", { required: true })}
              defaultValue="" // Set default value for select
            >
              <option disabled value="">
                Select role
              </option>
              <option value="1" className="text-black">
                Admin
              </option>
              <option value="2" className="text-black">
                Operator
              </option>
            </select>
          </div>

          <button className="text-xl w-32 h-10 mt-5 rounded-lg bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Submit
          </button>
        </form>
      </CommonModal>
    </>
  );
};

export default AddUser;

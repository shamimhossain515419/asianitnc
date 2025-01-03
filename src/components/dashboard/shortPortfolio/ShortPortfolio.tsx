"use client";
import Image from "next/image";
import AddPortfolio from "./AddPortfolio";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/utility/Fetcher";
import DeletePortfolio from "./DeletePortfolio";
import UpdatePortfolio from "./UpdatePortfolio";

const ShortPortfolio = () => {
    const {
        data: shortPortfolioData,
        error,
        isLoading,
        mutate,
    } = useSWR(`${process.env.BASE_URL}/api/short-portfolio`, fetcher);

    const [deleteModal, setDeleteOpenModal] = useState<any>();
    const [updateModal, setUpdateModal] = useState<any>();
    return (
        <>
            {/* update portfolio component  */}
            <UpdatePortfolio
                mutate={mutate}
                updateModal={updateModal}
                setUpdateModal={setUpdateModal}
            />
            {/* delete portfolio component  */}
            <DeletePortfolio
                openModal={deleteModal}
                setOpenModal={setDeleteOpenModal}
                mutate={mutate}
            />
            <div className=" pt-2  pb-10 flex justify-between items-center gap-5">
                <div>
                    {/* total portfolio  */}
                    <h1 className=" text-[20px] font-bold">Total portfolio: {shortPortfolioData?.data?.length} </h1>
                </div>
                {/* add  portfolio button  */}
                <AddPortfolio mutate={mutate} />
            </div>
            <div className="w-full overflow-x-auto">
                {/* user table  */}
                <table className="w-full text-left border border-separate rounded border-[#9339FB]">
                    <tbody>
                        <tr className=" bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]">
                            {/* table heading  */}
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white "
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white"
                            >
                                Image
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white "
                            >
                                total
                            </th>

                            <th
                                scope="col"
                                className="h-12 px-6 text-sm text-center font-medium border-l first:border-l-0 stroke-[#9339FB] text-white "
                            >
                                Action
                            </th>
                        </tr>
                        {/* table data  */}

                        {shortPortfolioData?.data?.map((port: any, i: number) => {
                            //  table data
                            return (
                                <tr
                                    key={i}
                                    className="transition-colors duration-300 hover:bg-[#171E37]"
                                >
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white py-1 ">
                                        {/* techa  */}
                                        <div className=" flex items-start gap-4">
                                            <div className=" pt-1">
                                                <h1 className="text-[16px] capitalize font-medium">
                                                    {i + 1}
                                                </h1>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white ">
                                        {/* portfolio images  */}
                                        <div className=" w-[120px] h-[80px] py-2 overflow-hidden">
                                            <Image
                                                className=" h-full  w-full  object-fill"
                                                width={100}
                                                layout="responsive"
                                                height={80}
                                                src={`/uploads/short_portfolio/${port?.image}`}
                                                alt="image"
                                            />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white ">
                                        {port?.title}
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white ">
                                        {port?.total}
                                    </td>

                                    <td className="h-12 px-6 text-center text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white ">
                                        {/* table action  */}
                                        <div>
                                            <div
                                                className=" relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
                                                aria-describedby="tooltip-01"
                                            >
                                                <div className=" inline-block rounded-full p-1 cursor-pointer hover:bg-gradient-to-r from-[#1EA0D9] to-[#9339FB] ">
                                                    <BsThreeDots className="text-[17px] text-white lg:text-[20px]" />
                                                </div>
                                                <div
                                                    role="tooltip"
                                                    id="tooltip-01"
                                                    className="invisible absolute bottom-full left-1/2  mb-2 w-48 -translate-x-1/2 rounded bg-white p-4 text-sm text-black opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent before:border-t-white before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100 z-50"
                                                >
                                                    <div className=" space-y-2">
                                                        {/* table action button  */}
                                                        <div
                                                            onClick={() => setDeleteOpenModal(port)}
                                                            className="flex items-center text-red-500  gap-2"
                                                        >
                                                            <MdDeleteOutline className="text-[17px] lg:text-[20px]" />
                                                            <p>Delete</p>
                                                        </div>
                                                        <div
                                                            onClick={() => setUpdateModal(port)}
                                                            className=" flex items-center gap-2"
                                                        >
                                                            <MdEdit className="text-[17px] text-black lg:text-[20px]" />
                                                            <p>Edit</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShortPortfolio;

"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import useSWR from "swr";
import { fetcher } from "@/utility/Fetcher";
import Loader from "@/components/utilitycomponents/Loader/Loader";

import { serviceInterface } from "@/types/ServiceInterface";
import AddService from "./AddService";
import { DeleteService } from "./DeleteService";
import Image from "next/image";
import UpdateService from "./UpdateService";

const Services = () => {
  const {
    data: services,
    error,
    isLoading,
    mutate,
  } = useSWR(`${process.env.BASE_URL}/api/service`, fetcher);


  // user Delete Handler

  const [deleteModal, setDeleteOpenModal] = useState<serviceInterface>();
  const [updateModal, setUpdateModal] = useState<serviceInterface>();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {/* update Modal */}

      {updateModal && (
        <UpdateService
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
        />
      )}

      {/* delete Modal */}
      <DeleteService
        openModal={deleteModal}
        setOpenModal={setDeleteOpenModal}
        mutate={mutate}
      />
      <div className=" pt-2  pb-10 flex justify-between items-center gap-5">
        <div>
          {/* total user  */}
          <h1 className=" text-[20px] font-bold">
            Total Service: {services?.data?.length}
          </h1>
        </div>
        {/* add user button  */}
        <AddService mutate={mutate} />
      </div>
      <div className="w-full overflow-x-auto">
        {/* user table  */}
        <table className="w-full text-left border border-separate rounded border-[#9339FB]">
          <tbody>
            <tr className=" bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]">
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white "
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white "
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white"
              >
                description
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-[#9339FB] text-white "
              >
                link
              </th>

              <th
                scope="col"
                className="h-12 px-6 text-sm text-center font-medium border-l first:border-l-0 stroke-[#9339FB] text-white "
              >
                Action
              </th>
            </tr>
            {/* table data  */}

            {services?.data.map((service: serviceInterface) => {
              return (
                <tr
                  key={service?.id}
                  className="transition-colors duration-300 hover:bg-[#171E37]"
                >
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white py-1 ">
                    <div className=" flex items-start gap-4">
                      <div className="w-[100px] pt-1">
                        <Image
                          className=""
                          src={`/uploads/services/${service?.image}`}
                          width={100}
                          height={100}
                          layout="responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white py-1 ">
                    <div className=" flex items-start gap-4">
                      <div className=" pt-1">
                        <h1 className="text-[16px] capitalize font-medium">
                          {service?.title}
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white ">
                    {service?.description}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white ">
                    {service?.link}
                  </td>

                  <td className="h-12 px-6 text-center text-sm transition duration-300 border-t border-l first:border-l-0 border-[#9339FB] stroke-slate-500 text-white ">
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
                            <div
                              onClick={() => setDeleteOpenModal(service)}
                              className="flex items-center gap-2"
                            >
                              <MdDeleteOutline className="text-[17px] text-white lg:text-[20px]" />
                              <p>Delete</p>
                            </div>
                            <div
                              onClick={() => setUpdateModal(service)}
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

export default Services;
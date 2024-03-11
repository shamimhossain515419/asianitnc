import { useState } from "react";
import toast from "react-hot-toast";

export const DeleteService = ({ openModal, setOpenModal, mutate }: any) => {
  const deleteServiceHandler = () => {
    fetch(`${process.env.BASE_URL}/api/service?id=${openModal.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data?.message);
        setOpenModal();
        mutate();
      })
      .catch((err) => {
        toast.success("Delete failed: ");
      });
  };

  return (
    <div className="w-72 mx-auto flex items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-80 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "translate-y-0 opacity-1 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="space-y-3 flex flex-col justify-center items-center">
            <svg
              className={`${
                openModal
                  ? "scale-100 rotate-0 duration-200"
                  : "scale-0 rotate-90"
              } delay-100`}
              width={75}
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  fill="#16BAC5"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
                ></path>
              </g>
            </svg>
            <h6 className="font-medium text-center text-slate-700">
              <p>
                Are you sure you want to delete{" "}
                <span className="font-bold"> {openModal?.name}</span>?
              </p>
            </h6>
            <button
              onClick={() => deleteServiceHandler()}
              className="text-white bg-[#16BAC5] px-6 py-2 rounded-full"
            >
              Delete
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { IoClose } from "react-icons/io5";
const CommonModal = ({ setActive, active, children }: any) => {
  return (
    <>
      <div
        className={`fixed z-[100] flex items-center justify-center ${active ? "opacity-1 visible" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute md:w-[600px] max-w-full rounded-sm text-black  bg-gradient-to-r from-[#ff80b5] to-[#9089fc] p-4 pb-5  drop-shadow-2xl ${active
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
            } `}
        >
          <div
            className="absolute top-0 right-0 p-2 cursor-pointer"
            onClick={() => setActive(false)}
          >
            <IoClose className="text-[18px] lg:text-[24px] text-black" />
          </div>

          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default CommonModal;

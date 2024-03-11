const CommonInput = ({ type, text, name }: any) => {
    return (
        <>
            <div className="group_input group">
                <label className="text-[16px] lg:text-[20px] font-medium" htmlFor="name">{text} <span className="text-red-500">*</span> </label>
                <div className="flex mt-2 items-center justify-center group rounded-[8px] text-sm font-semibold w-full focus-within:bg-gradient-to-r focus-within:from-[#ffffff91] focus-within:to-[#ffffff91] bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]  p-[2px] focus-within:shadow-md">
                    <div className="bg-transparent w-full  rounded-[8px] flex justify-between items-center group">
                        <input
                            type={type}
                            className="py-4 bg-[#030334fc]  rounded-[8px]  px-3 w-full text-white group outline-none placeholder-gray-500"
                            placeholder="Enter Your First Name"

                            name={name}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommonInput;

import React from 'react';

const ContactForm = () => {
    return (
        <>
            <form action="">
                {/* input name  */}
                <div className="group_input group">
                    <label className="text-[16px] lg:text-[20px] font-medium" htmlFor="name">Name <span className="text-red-500">*</span> </label>
                    <div className="flex mt-2 items-center justify-center group rounded-[8px] text-sm font-semibold w-full focus-within:bg-gradient-to-r focus-within:from-[#ffffff91] focus-within:to-[#ffffff91] bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]  p-[2px] focus-within:shadow-md">
                        <div className="bg-transparent w-full  rounded-[8px] flex justify-between items-center group">
                            <input
                                type="text"
                                className="py-4 bg-[#030334fc]  rounded-[8px]  px-3 w-full text-white group outline-none placeholder-gray-500"
                                placeholder="Enter Your First Name"

                                name="name"
                            />
                        </div>
                    </div>
                </div>

                <div className=' grid lg:grid-cols-2 lg:gap-4'>
                    {/* input Email  */}
                    <div className="group_input group py-[13px]">
                        <label className="text-[16px] lg:text-[20px] font-medium" htmlFor="name">E-mail <span className="text-red-500">*</span> </label>
                        <div className="flex mt-2 items-center justify-center group rounded-[8px] text-sm font-semibold w-full focus-within:bg-gradient-to-r focus-within:from-[#ffffff91] focus-within:to-[#ffffff91] bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]  p-[2px] focus-within:shadow-md">
                            <div className="bg-transparent w-full  rounded-[8px] flex justify-between items-center group">
                                <input
                                    type="text"
                                    className="py-4 bg-[#030334fc]  rounded-[8px]  px-3 w-full text-white group outline-none placeholder-gray-500"
                                    placeholder="Enter Your  Email"
                                    name="email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="group_input group py-[13px]">
                        <label className="text-[16px] lg:text-[20px] font-medium" htmlFor="name">Phone <span className="text-red-500">*</span> </label>
                        <div className="flex mt-2 items-center justify-center group rounded-[8px] text-sm font-semibold w-full focus-within:bg-gradient-to-r focus-within:from-[#ffffff91] focus-within:to-[#ffffff91] bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]  p-[2px] focus-within:shadow-md">
                            <div className="bg-transparent w-full  rounded-[8px] flex justify-between items-center group">
                                <input
                                    type="number"
                                    className="py-4 bg-[#030334fc]  rounded-[8px]  px-3 w-full text-white group outline-none placeholder-gray-500"
                                    placeholder="Enter Your  phone"
                                    name="phone"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* input services  */}
                <div className="group_input group">
                    <label className="text-[16px] lg:text-[20px] font-medium" htmlFor="name">Name <span className="text-red-500">*</span> </label>
                    <div className="flex mt-2 items-center justify-center group rounded-[8px] text-sm font-semibold w-full focus-within:bg-gradient-to-r focus-within:from-[#ffffff91] focus-within:to-[#ffffff91] bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]  p-[2px] focus-within:shadow-md">
                        <div className="bg-transparent w-full  rounded-[8px] flex justify-between items-center group">
                            <input
                                type="text"
                                className="py-4 bg-[#030334fc]  rounded-[8px]  px-3 w-full text-white group outline-none placeholder-gray-500"
                                placeholder="App Development"

                                name="services"
                            />
                        </div>
                    </div>
                </div>
                {/* input Massage *  */}
                <div className="group_input group pt-[13px]">
                    <label className="text-[16px] lg:text-[20px] font-medium" htmlFor="name">Massage <span className="text-red-500">*</span> </label>
                    <div className="flex mt-2 items-center justify-center group rounded-[8px] text-sm font-semibold w-full focus-within:bg-gradient-to-r focus-within:from-[#ffffff91] focus-within:to-[#ffffff91] bg-gradient-to-r from-[#1EA0D9] to-[#9339FB]  p-[2px] focus-within:shadow-md">
                        <div className="bg-transparent w-full  rounded-[8px] flex justify-between items-center group">
                            <textarea
                                className='py-4 bg-[#030334fc]  rounded-[8px]  px-3 w-full text-white group outline-none placeholder-gray-500'
                                name="Massage *" id="" cols={12} rows={5}></textarea>
                        </div>
                    </div>
                </div>
                {/* submit button  */}

                <div className=' w-full flex justify-center py-10'>
                    <button
                        className="bg-gradient-to-r   from-[#1EA0D9] to-[#9339FB] px-10 py-3 rounded-[8px]"
                        type='submit'
                    >
                        {" "}
                        <span className="text-[18px] lg:text-[24px] uppercase font-black">
                            {" "}
                            Send message{" "}
                        </span>{" "}
                    </button>
                </div>
            </form>

        </>
    );
};

export default ContactForm;
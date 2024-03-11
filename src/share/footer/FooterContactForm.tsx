import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

const FooterContactForm = () => {
    return (
        <>
            <div className=' py-3'>
                <form action="">
                    {/* input name  */}
                    <div className='group flex items-center  rounded-[4px] overflow-hidden py-2'>
                        <div className=' h-[45px] w-[60px] flex justify-center items-center  text-white bg-[#5D03EB]'>
                            <FaUserAlt size={20} />
                        </div>
                        <div className=' w-full h-[45px] bg-primary '>
                            <input type="text" className=' px-2 text-white placeholder:text-white outline-0 y w-full h-full bg-transparent ' placeholder='Enter your name' name="" id="" />

                        </div>
                    </div>
                    {/* input email  */}
                    <div className='group flex items-center  rounded-[4px] overflow-hidden py-2'>
                        <div className=' h-[45px] w-[60px] flex justify-center items-center  text-white bg-[#5D03EB]'>
                            <IoMdMailUnread size={20} />
                        </div>
                        <div className=' w-full h-[45px] bg-primary '>
                            <input type="email" className=' px-2 text-white placeholder:text-white outline-0 y w-full h-full bg-transparent ' placeholder='Enter your email' name="" id="" />

                        </div>
                    </div>
                    {/* action button  */}
                    <div className='group flex items-center  rounded-[4px] overflow-hidden py-2'>
                        <div className=' w-full'>
                            <button
                                className="bg-gradient-to-r  block w-full from-[#1EA0D9] to-[#9339FB] px-10 py-3 rounded-[4px]"
                                type='submit'
                            >
                                {" "}
                                <span className="text-[18px] font-semibold">
                                    {" "}
                                    Submit{" "}
                                </span>{" "}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FooterContactForm;
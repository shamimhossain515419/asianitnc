"use client"
import React, { useEffect, useState } from "react";

const Copyright = () => {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000 * 60 * 60); // Update every hour

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [])

    return (
        <><div className=" bg-gradient-to-r  block w-full from-[#030334fc] via-[#031f52] to-[#030334fc]   py-2 ">
            <div className=" container">
                {/* copyright section  */}
                <div className="  flex  flex-col lg:flex-row text-center  justify-center items-center md:justify-between py-5 ">
                    <p className="text-[18px] font-normal">Copyright © 2016-{currentYear} - Asian It inc. | All Rights reserved</p>
                    <p>Privacy Policy | Terms and Condition</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Copyright;

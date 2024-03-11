import DashboardNavbar from '@/components/dashboard/dashboardNavbar/DashboardNavbar';
import DashboardSidebar from '@/components/dashboard/dashboardNavbar/dashboardSidebar/DashboardSidebar';
import React from 'react';

const layout = ({ children }: any) => {
    return (
        <div className=' w-full overflow-hidden'>
            <DashboardNavbar />
            <div className=" flex items-start">
                <div className=''>
                    <DashboardSidebar></DashboardSidebar>
                </div>

                <div className={` w-full  min-w-[50%] p-4 m-0 pt-10  `}>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default layout;
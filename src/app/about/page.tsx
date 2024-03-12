import AboutBanner from "@/components/about/AboutBanner";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChooseAsianIt from "@/components/about/WhyChooseAsianIt";
import Clients from "@/components/home/clients/Clients";
import Delivering from "@/components/home/delivering/Delivering";
import React from "react";

const page = () => {
    return (
        <>
            <AboutBanner />
            <WhoWeAre />
            <Delivering />
            <div className="container">
                <Clients />
            </div>
            <WhyChooseAsianIt />
        </>
    );
};

export default page;

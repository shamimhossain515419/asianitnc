import MemberCart from "@/components/utilitycomponents/carts/MemberCart";
import PrimarySectionTitle from "@/components/utilitycomponents/sectionTitle/PrimarySectionTitle";
import { TeamInterface } from "@/types/TeamInterface";
import React from "react";
const fetchData = async () => {
  const res = await fetch(`http://localhost:3000/api/team`, {
    next: { revalidate: 300 },
  })
  const OurTeam = await res.json();
  return OurTeam?.data

}
const page = async () => {
  const OurTeam = await fetchData();


  return (
    <>
      <div className="container">
        <div className="py-[85px]">
          {/* section title  */}
          <PrimarySectionTitle
            name={"OUR EXPERT TEAM MEMBERS"}
            title={"OUR 15 TECH EXPERT READY FOR YOUR SERVICES"}
          />
          <div className="pt-[85px] grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-8 ">
            {/* services cart  */}
            {
              OurTeam?.map((team: TeamInterface) => <MemberCart team={team} key={team?.id} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

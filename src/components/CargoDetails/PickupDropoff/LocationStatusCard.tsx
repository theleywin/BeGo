import React from "react";

interface LocationStatusCardProps {
  label: string;
  city: string;
  address: string;
  statusString: string;
}

const LocationStatusCard: React.FC<LocationStatusCardProps> = ({ label, city, address, statusString }) => (
  <div className={"flex flex-col "}>
    <p className={"font-[500] text-[11.2px] text-[#4C4D4E]"}>{label}</p>
    <p className={"font-[500] text-[15.5px] text-[#EDEDED]"}>{city}</p>
    <p className={"font-[400] text-[14.5px] text-[#7B7D7E] max-w-full truncate w-[181px]"}>{address}</p>
    {statusString === "En espera" ? (
      <div className={"flex mt-2 flex-row p-1 items-center justify-center gap-2 rounded-full w-[93px] bg-[#16191CFE]"}>
        <div className={"bg-[#D9D9D980] rounded-full w-[10px] h-[10px]"}></div>
        <p className={"font-[400] text-[11px] text-[#868889]"}>On hold</p>
      </div>
    ) : (
      <div className={"flex mt-2 flex-row p-1 items-center justify-center gap-2 rounded-full w-[93px] bg-[#16191CFE]"}>
        <div className={"bg-[#0C7DED] rounded-full w-[10px] h-[10px]"}></div>
        <p className={"font-[400] text-[11px] text-[#868889]"}>Accepted</p>
      </div>
    )}
  </div>
);

export default LocationStatusCard;


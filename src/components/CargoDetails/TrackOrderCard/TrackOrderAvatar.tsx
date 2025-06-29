import React from "react";
import photo from "../../../assets/photo.png";

const TrackOrderAvatar: React.FC = () => (
  <div className={"absolute flex items-center justify-center top-[-45px] right-[50%] translate-x-1/2 w-[90px] h-[90px] bg-[#1B2024] rounded-full"}>
    <div className={"flex overflow-hidden items-center justify-center rounded-full w-[75px] h-[75px]"}>
      <img src={photo} alt="Cargo Order" />
    </div>
  </div>
);

export default TrackOrderAvatar;


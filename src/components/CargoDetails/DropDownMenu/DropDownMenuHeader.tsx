import ArrowUp from "../../../assets/ArrowUp.tsx";
import React from "react";
import HorizontalGradientLine from "../HorizontalGradientLine.tsx";

interface DropDownMenuHeaderProps {
  open: boolean;
  onToggle: () => void;
  title: string;
}

const DropDownMenuHeader: React.FC<DropDownMenuHeaderProps> = ({ open, onToggle, title }) => (
  <div className="relative flex flex-row items-center justify-between backdrop-blur-[1px] gap-12 py-4 px-6
                bg-white/5 border-1 border-gray-800 rounded-[20px] h-[fit] w-full">
    <HorizontalGradientLine position="top" />
    <HorizontalGradientLine position="bottom" />
    <p className="font-[400] text-[15px] text-[#EDEDED] z-10">{title}</p>
    <button onClick={onToggle} className="z-10">
      <div className={`transition -all duration-300 ${!open ? "rotate-180" : ""} flex items-center justify-center w-[24px] h-[24px]`}>
        <ArrowUp/>
      </div>
    </button>
  </div>
);

export default DropDownMenuHeader;

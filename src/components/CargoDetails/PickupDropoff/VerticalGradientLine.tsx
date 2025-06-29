import React from "react";

interface VerticalGradientLineProps {
  switchTab: boolean;
}

const VerticalGradientLine: React.FC<VerticalGradientLineProps> = ({ switchTab }) => (
  <div className="relative w-px h-full m-5 overflow-hidden">
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
        switchTab ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 100%)',
      }}
    ></div>
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
        switchTab ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 100%)',
      }}
    ></div>
  </div>
);

export default VerticalGradientLine;


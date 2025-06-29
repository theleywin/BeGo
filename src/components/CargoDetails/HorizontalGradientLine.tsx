import React from "react";

const HorizontalGradientLine: React.FC<{ position: "top" | "bottom" }> = ({ position }) => (
  <div
    className={`absolute ${position}-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-${position === "top" ? "t" : "b"}-[20px]`}
  />
);

export default HorizontalGradientLine;


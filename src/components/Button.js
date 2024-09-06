import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, size = "md", className }) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-lg px-8 py-5",
  };

  return (
    <button
      className={twMerge(
        "bg-white text-textBlack rounded-full px-3 py-1",
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

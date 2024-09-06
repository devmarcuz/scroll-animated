import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("max-auto max-w-[980px] px-6", className)}>
      {children}
    </div>
  );
};

export default Container;

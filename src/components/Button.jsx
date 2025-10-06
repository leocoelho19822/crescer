// eslint-disable-next-line
import React from "react";

// eslint-disable-next-line
export default function Button({children, onClick, type = "button", className = "",}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#3C6D59] text-white px-4 py-2  rounded-lg hover:bg-[#5e8e79] transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

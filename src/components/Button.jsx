// eslint-disable-next-line
import React from "react";

// eslint-disable-next-line
export default function Button({children, onClick, type = "button", className = "",}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#8FD3B8] text-gray-800 px-4 py-2  rounded-lg hover:bg-[#95DBBF] transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

// src/components/Button.jsx
import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#8FD3B8] text-gray-800 font-semibold px-4 py-2 rounded-3xl hover:bg-[#95DBBF] transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

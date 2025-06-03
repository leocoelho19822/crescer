// src/components/WaveDivider.jsx
import React from "react";
import wave from "../assets/wave67.svg";

export default function WaveDivider({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img
        src={wave}
        alt="Divisor ondulado"
        className="w-full object-cover"
      />
    </div>
  );
}

// eslint-disable-next-line
import React from "react";
import waveWhite from "../assets/wave67.svg";
import waveGray from "../assets/wavegray.svg";
import waveBlack from "../assets/waveblack.svg";

// eslint-disable-next-line
export default function WaveDivider({ color = "white", className = "" }) {
  const waveMap = {
    white: waveWhite,
    gray: waveGray,
    black: waveBlack,
    
  };

  const waveSrc = waveMap[color] || waveWhite;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img src={waveSrc} alt={`Divisor ${color}`} className="w-full object-cover " />
    </div>
  );
}

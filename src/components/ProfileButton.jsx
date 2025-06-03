// src/components/ProfileButton.jsx
import React from "react";

import { AiFillHeart } from "react-icons/ai";
import defaultAvatar from "../assets/default-avatar.png";

export default function ProfileButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 bg-[#8FD3B8] rounded-full hover:bg-blue-700 transition cursor-pointer"
    >
      {/* Ícone de coração para favoritos */}
      <AiFillHeart className="text-white text-xl" />

      {/* Foto de perfil */}
      <img
        src={defaultAvatar}
        alt="Perfil"
        className="h-8 w-8 rounded-full object-cover border-2 border-white"
      />
    </button>
  );
}

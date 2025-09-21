// eslint-disable-next-line
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../assets/Logo_Branco.svg";

// eslint-disable-next-line
export default function HeaderEdit({ user }) {
  // eslint-disable-next-line
  const [name, setName] = useState(user?.name || "");
  // eslint-disable-next-line
  const [role, setRole] = useState(user?.role || "");

  const location = useLocation();
  const navigate = useNavigate();

  const isDashboard = location.pathname.includes("/editorial/dashboard");

  return (
    <>
      <header className="bg-[#78B19A] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <img
              src={logo}
              alt="Logo Cres(Ser)"
              className="h-10 object-contain"
            />
          </div>

          {/* Título */}
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-3xl sm:text-xl font-bold leading-tight">
              Gestão de Conteúdo
            </h1>
            <p className="text-xs sm:text-sm opacity-90 -mt-1">
              Sistema Administrativo
            </p>
          </div>

          {/* Utilizador + Logout */}
          {user && (
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto">
              <div className="text-center sm:text-right">
                <p>
                  Olá, <span className="font-semibold">{name}</span>
                </p>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/editorial";
                }}
                className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg shadow transition w-full sm:w-auto"
              >
                Terminar Sessão
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Seta de voltar (apenas se não estiver no dashboard) */}
      {!isDashboard && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#78B19A] hover:text-[#5e8e79] transition font-medium cursor-pointer"
          >
            <FiArrowLeft size={18} /> Voltar
          </button>
        </div>
      )}
    </>
  );
}

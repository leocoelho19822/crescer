// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line
export default function StatCard({ titulo, publicados, pendentes, Icon, cor, link }) {
  return (
    <Link
      to={link}
      className="relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 block"
    >
      {/* Ícone de fundo */}
      <div className="absolute top-4 right-4 opacity-20 text-5xl text-gray-400">
        <Icon />
      </div>

      {/* Título */}
      <h2 className="text-sm font-semibold text-gray-500 mb-4">{titulo}</h2>

      {/* Publicados */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-green-600 font-medium">Publicados</span>
        <span className="text-lg font-bold text-green-700">{publicados}</span>
      </div>

      {/* Pendentes */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-yellow-600 font-medium">Pendentes</span>
        <span className="text-lg font-bold text-yellow-700">{pendentes}</span>
      </div>

      {/* Barra de progresso */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`${cor} h-full rounded-full`}
          style={{
            width: `${
              publicados + pendentes > 0
                ? (publicados / (publicados + pendentes)) * 100
                : 0
            }%`,
          }}
        ></div>
      </div>
    </Link>
  );
}

// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

export default function CardEvento({ titulo, descricao, data, hora, local, imagem }) {
  return (
    <div className="rounded-xl border border-zinc-200 shadow-sm bg-white overflow-hidden hover:shadow-md transition">
      {imagem && (
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-zinc-800">{titulo}</h3>
        <p className="text-sm text-zinc-600 mt-2">{descricao}</p>

        <div className="mt-3 space-y-1 text-sm text-zinc-700">
          <p className="flex items-center gap-2">
            <FiCalendar /> {new Date(data).toLocaleDateString("pt-PT")}
          </p>
          <p className="flex items-center gap-2">
            <FiClock /> {hora}
          </p>
          <p className="flex items-center gap-2">
            <FiMapPin /> {local}
          </p>
        </div>
      </div>
    </div>
  );
}

CardEvento.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  data: PropTypes.string.isRequired,
  hora: PropTypes.string,
  local: PropTypes.string,
  imagem: PropTypes.string
};

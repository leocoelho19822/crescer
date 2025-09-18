// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import { FiCalendar, FiMapPin, FiClock, FiChevronRight, FiTag } from "react-icons/fi";

export default function CardEvento({ titulo, data, hora, local, tipo, descricao, status }) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 p-4 shadow-sm transition bg-white ${
        status === "passado" ? "opacity-60 pointer-events-none" : "hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-[#78B19A]">
          <FiCalendar className="shrink-0" />
          <span className="text-sm font-medium">{data}</span>
        </div>
        {tipo && (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#78B19A]/10 text-[#78B19A]">
            <FiTag className="text-xs" />
            {tipo}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold mt-3">{titulo}</h3>

      <div className="mt-3 space-y-1 text-sm text-zinc-600">
        <p className="flex items-center gap-2">
          <FiClock /> {hora}
        </p>
        <p className="flex items-center gap-2">
          <FiMapPin /> {local}
        </p>
      </div>

      {descricao && <p className="mt-3 text-sm text-zinc-700">{descricao}</p>}

      {status === "ativo" && (
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-sm"
        >
          Inscrever-se <FiChevronRight />
        </button>
      )}

      {status === "em-breve" && (
        <p className="mt-4 text-sm italic text-zinc-500">Inscrições em breve</p>
      )}

      {status === "passado" && (
        <p className="mt-4 text-sm text-red-500">Evento já realizado</p>
      )}
    </div>
  );
}

CardEvento.propTypes = {
  titulo: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  hora: PropTypes.string,
  local: PropTypes.string,
  tipo: PropTypes.string,
  descricao: PropTypes.string,
  status: PropTypes.oneOf(["ativo", "em-breve", "passado"]).isRequired,
};

// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import { FiCalendar, FiClock, FiMapPin, FiPlusCircle } from "react-icons/fi";

export default function CardEvento({ titulo, descricao, data, hora, local, imagem }) {
  // Função para formatar a data/hora no padrão Google Calendar
  const formatGoogleDate = (dateStr, timeStr) => {
    const start = new Date(`${dateStr}T${timeStr || "00:00"}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // +1h por padrão

    const toGoogleFormat = (d) =>
      d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    return `${toGoogleFormat(start)}/${toGoogleFormat(end)}`;
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    titulo
  )}&dates=${formatGoogleDate(data, hora)}&details=${encodeURIComponent(
    descricao || ""
  )}&location=${encodeURIComponent(local || "")}`;

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

        {/* Botão para adicionar ao Google Calendar */}
        <div className="mt-4">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 text-sm font-medium"
          >
            <FiPlusCircle /> Adicionar ao Google Calendar
          </a>
        </div>
      </div>
    </div>
  );
}

CardEvento.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  data: PropTypes.string.isRequired, // formato "YYYY-MM-DD"
  hora: PropTypes.string, // formato "HH:mm"
  local: PropTypes.string,
  imagem: PropTypes.string
};

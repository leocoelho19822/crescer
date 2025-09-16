// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import { FiCalendar, FiMapPin, FiClock, FiChevronRight, FiTag, FiPhoneCall } from "react-icons/fi";

import Button from "../components/Button";

//import Button from "../components/Button";

function CardEvento({ titulo, data, hora, local, tipo, descricao, disabled }) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 p-4 shadow-sm transition hover:shadow-md bg-white ${
        disabled ? "opacity-60 pointer-events-none" : ""
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

      <button
        type="button"
        aria-disabled={disabled}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-sm"
      >
        Saber mais <FiChevronRight />
      </button>
    </div>
  );
}

CardEvento.propTypes = {
  titulo: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  tipo: PropTypes.string,
  descricao: PropTypes.string,
  disabled: PropTypes.bool,
};

export default function Eventos() {
  const exemplos = [
    {
      titulo: "Sessão Pais & Bebés: Sono e Rotinas",
      data: "Sáb, 28 Set",
      hora: "10:00 – 11:30",
      local: "CS Águeda – Sala 2",
      tipo: "Sessão",
      descricao: "Dicas práticas para estabelecer rotinas de sono saudáveis no 1.º ano.",
    },
    {
      titulo: "Workshop Primeiros Socorros Pediátricos",
      data: "Sáb, 12 Out",
      hora: "09:30 – 12:30",
      local: "CS Águeda – Auditório",
      tipo: "Workshop",
      descricao: "Aprenda noções essenciais de segurança e resposta a emergências.",
    },
    {
      titulo: "Encontro de Amamentação",
      data: "Qui, 17 Out",
      hora: "14:30 – 16:00",
      local: "CS Águeda – Sala Amamentação",
      tipo: "Encontro",
      descricao: "Partilha de experiências com apoio de enfermeiras especialistas.",
    },
    {
      titulo: "Aulas de Massagem ao Bebé",
      data: "Em breve",
      hora: "—",
      local: "CS Águeda",
      tipo: "Curso",
      descricao: "Turma a abrir. Inscrições disponíveis em breve.",
      disabled: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-24 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Eventos na Comunidade
      </h1>

      {/* Cards de eventos */}
      <div className="grid sm:grid-cols-2 gap-6 my-10">
        {exemplos.map((e, i) => (
          <CardEvento key={i} {...e} />
        ))}
      </div>

      <div className="prose prose-zinc max-w-none text-center">
        <p className="italic text-3xl my-10 text-center">
          “Se mudarmos o início da história, mudamos toda a história.”
        </p>

        <p className="text-center">
                  Fale com a sua médica ou enfermeira de família, ou contacte
                  diretamente a equipa do Centro de Saúde de Águeda.
                </p>
        
                <a href="tel:234610210" aria-label="Ligar para Centro de Saúde de Águeda">
                  <Button className="mt-6 inline-flex items-center gap-2 ">
                    <FiPhoneCall size={20} />
                    <span>234 610 210 (3ªs e 5ªs, 10h às 13h)</span>
                  </Button>
                </a>
      </div>
    </div>
  );
}

Eventos.propTypes = {};

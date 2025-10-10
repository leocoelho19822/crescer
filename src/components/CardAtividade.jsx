// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FiCalendar, FiMapPin, FiClock, FiChevronRight, FiTag } from "react-icons/fi";
import ConfirmOverlay from "./ConfirmOverlay";
import Button from "./Button";

export default function CardEvento({ titulo, data, hora, local, tipo, descricao, status }) {
  const [isInscrito, setIsInscrito] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [acao, setAcao] = useState(null); // "inscricao", "anular" ou "login"

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];
      const jaInscrito = inscricoes.some(
        (i) => i.evento === titulo && i.email === user.email
      );
      setIsInscrito(jaInscrito);
    }
  }, [titulo]);

  const abrirConfirmacao = (tipoAcao) => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser && tipoAcao === "inscricao") {
      setAcao("login");
      setShowOverlay(true);
      return;
    }
    setAcao(tipoAcao);
    setShowOverlay(true);
  };

  const confirmarAcao = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];

    if (acao === "inscricao") {
      inscricoes.push({ evento: titulo, email: storedUser.email });
      localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
      setIsInscrito(true);
    }

    if (acao === "anular") {
      inscricoes = inscricoes.filter(
        (i) => !(i.evento === titulo && i.email === storedUser.email)
      );
      localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
      setIsInscrito(false);
    }

    setShowOverlay(false);
  };

  return (
    <div
      className={`rounded-xl border border-zinc-200 p-4 shadow-sm transition bg-white ${
        status === "passado" ? "opacity-60 pointer-events-none" : "hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-verde-100">
          <FiCalendar className="shrink-0" />
          <span className="text-sm font-medium">{data}</span>
        </div>
        {tipo && (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-verde-10 text-verde-100">
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
        isInscrito ? (
          <div className="mt-4 text-sm">
            <p className="font-medium text-verde-100 mb-2">✅ Já inscrito</p>
            <button
              type="button"
              onClick={() => abrirConfirmacao("anular")}
              className="text-red-600 underline hover:text-red-800 cursor-pointer"
            >
              Anular inscrição
            </button>
          </div>
        ) : (
          <Button
            type="button"
            onClick={() => abrirConfirmacao("inscricao")}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 text-sm cursor-pointer"
          >
            Inscrever-se <FiChevronRight />
          </Button>
        )
      )}

      {status === "em-breve" && (
        <p className="mt-4 text-sm italic text-zinc-500">Inscrições em breve</p>
      )}

      {status === "passado" && (
        <p className="mt-4 text-sm text-red-500">Evento já realizado</p>
      )}

      {showOverlay && acao === "login" && (
        <ConfirmOverlay
          mensagem="O início de sessão é obrigatório para realizar a inscrição."
          tipo="alert"
          onCancel={() => setShowOverlay(false)}
        />
      )}

      {showOverlay && (acao === "inscricao" || acao === "anular") && (
        <ConfirmOverlay
          mensagem={
            acao === "inscricao"
              ? `Deseja confirmar a inscrição no evento "${titulo}"?`
              : `Tem certeza que deseja anular a inscrição em "${titulo}"?`
          }
          onConfirm={confirmarAcao}
          onCancel={() => setShowOverlay(false)}
          tipo="confirm"
        />
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

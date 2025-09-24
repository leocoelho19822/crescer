// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiCalendar,
  FiMapPin,
  FiFileText,
  FiCheckCircle,
  FiType,
  FiClock,
  FiTag,
} from "react-icons/fi";
import HeaderEdit from "./HeaderEdit";

// eslint-disable-next-line
export default function EventoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [evento, setEvento] = useState({
    titulo: "",
    descricao: "",
    data: "",
    horaInicio: "",
    horaFim: "",
    local: "",
    tipo: "",
    idUser: user?.id || "",
    ativo: true,
  });

  useEffect(() => {
    if (id) {
      fetch("/data/eventos.json")
        .then((res) => res.json())
        .then((data) => {
          const encontrado = data.eventos.find((e) => e.id === id);
          if (encontrado) {
            const [inicio, fim] = encontrado.hora
              ? encontrado.hora.split(" – ")
              : ["", ""];
            setEvento({
              ...encontrado,
              horaInicio: inicio,
              horaFim: fim,
            });
          }
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEvento((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoEvento = {
      id: id || `evento${Date.now()}`,
      titulo: evento.titulo,
      descricao: evento.descricao,
      data: evento.data,
      hora: `${evento.horaInicio} – ${evento.horaFim}`, // 🔑 string única
      local: evento.local,
      tipo: evento.tipo,
      idUser: user?.id || evento.idUser,
      ativo: evento.ativo,
    };

    console.log("JSON a gravar na BD:", JSON.stringify(novoEvento, null, 2));

    navigate("/editorial/eventos");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderEdit user={user} />

      <main className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiCalendar className="text-[#78B19A]" />
          {id ? "Editar Evento" : "Criar Novo Evento"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow rounded-xl space-y-6"
        >
          {/* Título */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiType /> Título
            </label>
            <input
              type="text"
              name="titulo"
              value={evento.titulo}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              required
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiFileText /> Descrição
            </label>
            <textarea
              name="descricao"
              value={evento.descricao}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
            />
          </div>

          {/* Data e Horários */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="flex items-center gap-2 font-medium mb-1">
                <FiCalendar /> Data
              </label>
              <input
                type="date"
                name="data"
                value={evento.data}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 font-medium mb-1">
                <FiClock /> Hora Início
              </label>
              <input
                type="time"
                name="horaInicio"
                value={evento.horaInicio}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 font-medium mb-1">
                <FiClock /> Hora Fim
              </label>
              <input
                type="time"
                name="horaFim"
                value={evento.horaFim}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              />
            </div>
          </div>

          {/* Local e Tipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 font-medium mb-1">
                <FiMapPin /> Local
              </label>
              <input
                type="text"
                name="local"
                value={evento.local}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 font-medium mb-1">
                <FiTag /> Tipo
              </label>
              <select
                name="tipo"
                value={evento.tipo}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              >
                <option value="">Selecione</option>
                <option value="Sessão">Sessão</option>
                <option value="Workshop">Workshop</option>
                <option value="Encontro">Encontro</option>
                <option value="Curso">Curso</option>
                <option value="Palestra">Palestra</option>
                <option value="Oficina">Oficina</option>
                <option value="Conferência">Conferência</option>
              </select>
            </div>
          </div>

          {/* Estado */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiCheckCircle /> Estado
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="ativo"
                checked={evento.ativo}
                onChange={handleChange}
                className="w-4 h-4 text-[#78B19A] border-gray-300 rounded focus:ring-[#78B19A]"
              />
              <span className="text-sm">
                {evento.ativo ? "Ativo" : "Inativo"}
              </span>
            </div>
          </div>

          {/* Botão */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#78B19A] hover:bg-[#5e8e79] text-white px-6 py-2 rounded-lg shadow transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

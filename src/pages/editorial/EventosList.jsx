// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiEdit,
  FiTrash2,
  FiSearch,
  FiFilter,
  FiCalendar,
} from "react-icons/fi";
import HeaderEdit from "./HeaderEdit";

// eslint-disable-next-line
export default function EventosList() {
  const [eventos, setEventos] = useState([]);
  const [search, setSearch] = useState("");
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("/data/eventos.json")
      .then((res) => res.json())
      .then((data) => setEventos(data.eventos || []));
  }, []);

  const eventosFiltrados = eventos.filter((e) => {
    const matchSearch = e.titulo.toLowerCase().includes(search.toLowerCase());

    const matchAtivo =
      filtroAtivo === "todos"
        ? true
        : filtroAtivo === "ativos"
        ? e.ativo
        : !e.ativo;

    return matchSearch && matchAtivo;
  });

  const handleDelete = (id) => {
    if (window.confirm("Tens a certeza que desejas excluir este evento?")) {
      console.log("Excluir evento:", id);
      setEventos((prev) => prev.filter((e) => e.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderEdit user={user} />

      <main className="p-4 max-w-7xl mx-auto">
        {/* Título + Filtros */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FiCalendar className="text-[#78B19A]" />
            Gestão de Eventos
          </h1>

          <div className="flex gap-3">
            {/* Pesquisa */}
            <div className="flex items-center bg-white rounded-lg shadow px-3 py-2">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Pesquisar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-48 md:w-64 outline-none text-sm"
              />
            </div>

            {/* Filtro Ativo/Inativo */}
            <div className="flex items-center bg-white rounded-lg shadow px-3 py-2">
              <FiFilter className="text-gray-500 mr-2" />
              <select
                value={filtroAtivo}
                onChange={(e) => setFiltroAtivo(e.target.value)}
                className="text-sm outline-none bg-transparent"
              >
                <option value="todos">Todos</option>
                <option value="ativos">Ativos</option>
                <option value="inativos">Inativos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botão Novo Evento */}
        <div className="flex justify-end mb-6">
          <Link
            to="/editorial/eventos/novo"
            className="bg-[#78B19A] hover:bg-[#5e8e79] text-white px-4 py-2 rounded-lg shadow transition flex items-center gap-2"
          >
            + Novo Evento
          </Link>
        </div>

        {/* Mobile view (cards) */}
        <div className="md:hidden space-y-4">
          {eventosFiltrados.map((e) => (
            <div key={e.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-lg mb-1">{e.titulo}</h3>
              <p className="text-sm text-gray-600 mb-1">
                Data: {new Date(e.data).toLocaleDateString("pt-PT")}
              </p>
              <p
                className={`text-sm font-medium mb-1 ${
                  e.ativo ? "text-green-600" : "text-red-600"
                }`}
              >
                {e.ativo ? "Ativo" : "Inativo"}
              </p>
              <p className="text-sm text-gray-500 mb-3">{e.local}</p>
              <div className="flex justify-end gap-3">
                {/* Editar */}
                {user?.role === "profissional" || user?.role === "admin" ? (
                  <Link
                    to={`/editorial/eventos/editar/${e.id}`}
                    className="text-blue-600 hover:text-blue-800"
                    title="Editar"
                  >
                    <FiEdit size={18} />
                  </Link>
                ) : null}

                {/* Excluir */}
                {(user?.role === "profissional" || user?.role === "admin") && (
                  <button
                    onClick={() => handleDelete(e.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Excluir"
                  >
                    <FiTrash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}

          {eventosFiltrados.length === 0 && (
            <p className="text-center text-gray-500">Nenhum evento encontrado</p>
          )}
        </div>

        {/* Desktop view (tabela) */}
        <div className="hidden md:block bg-white shadow rounded-lg overflow-hidden overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Título</th>
                <th className="p-3">Data</th>
                <th className="p-3">Local</th>
                <th className="p-3">Estado</th>
                <th className="p-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {eventosFiltrados.map((e) => (
                <tr key={e.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{e.titulo}</td>
                  <td className="p-3">
                    {new Date(e.data).toLocaleDateString("pt-PT")}
                  </td>
                  <td className="p-3">{e.local}</td>
                  <td
                    className={`p-3 ${
                      e.ativo ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {e.ativo ? "Ativo" : "Inativo"}
                  </td>
                  <td className="p-3 flex gap-3 justify-end">
                    {/* Editar */}
                    {user?.role === "profissional" || user?.role === "admin" ? (
                      <Link
                        to={`/editorial/eventos/editar/${e.id}`}
                        className="text-blue-600 hover:text-blue-800"
                        title="Editar"
                      >
                        <FiEdit size={18} />
                      </Link>
                    ) : null}

                    {/* Excluir */}
                    {(user?.role === "profissional" || user?.role === "admin") && (
                      <button
                        onClick={() => handleDelete(e.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Excluir"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {eventosFiltrados.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-500">
                    Nenhum evento encontrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

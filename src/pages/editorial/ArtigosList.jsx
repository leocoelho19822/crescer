// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiEdit,
  FiTrash2,
  FiSearch,
  FiFilter,
  FiBookOpen,
} from "react-icons/fi";
import HeaderEdit from "./HeaderEdit";

// eslint-disable-next-line
export default function ArtigosList() {
  const [artigos, setArtigos] = useState([]);
  const [search, setSearch] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("todos");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("/data/artigos.json")
      .then((res) => res.json())
      .then((data) => setArtigos(data.artigos || []));
  }, []);

  const artigosFiltrados = artigos.filter((a) => {
    const matchSearch =
      a.titulo.toLowerCase().includes(search.toLowerCase()) ||
      a.categoria.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      filtroStatus === "todos" ? true : a.status === filtroStatus;

    return matchSearch && matchStatus;
  });

  const handleDelete = (id) => {
    if (window.confirm("Tens a certeza que desejas excluir este artigo?")) {
      console.log("Excluir artigo:", id);
      setArtigos((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderEdit user={user} />

      <main className="p-4 max-w-7xl mx-auto">
        {/* Título + Filtros */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FiBookOpen className="text-[#78B19A]" />
            Gestão de Artigos
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

            {/* Filtro de status */}
            <div className="flex items-center bg-white rounded-lg shadow px-3 py-2">
              <FiFilter className="text-gray-500 mr-2" />
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
                className="text-sm outline-none bg-transparent"
              >
                <option value="todos">Todos</option>
                <option value="publicado">Publicado</option>
                <option value="pendente">Pendente</option>
                <option value="arquivado">Arquivado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botão Novo Artigo */}
        <div className="flex justify-end mb-6">
          <Link
            to="/editorial/artigos/novo"
            className="bg-[#78B19A] hover:bg-[#5e8e79] text-white px-4 py-2 rounded-lg shadow transition flex items-center gap-2 cursor-pointer"
          >
            + Novo Artigo
          </Link>
        </div>

        {/* Mobile view (cards) */}
        <div className="md:hidden space-y-4">
          {artigosFiltrados.map((a) => (
            <div key={a.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-lg mb-1">{a.titulo}</h3>
              <p className="text-sm text-gray-600 mb-1">
                Categoria: {a.categoria}
              </p>
              <p
                className={`text-sm font-medium mb-1 ${
                  a.status === "publicado"
                    ? "text-green-600"
                    : a.status === "pendente"
                    ? "text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                Estado: {a.status}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Publicado em:{" "}
                {a.published_at
                  ? new Date(a.published_at).toLocaleDateString("pt-PT")
                  : "-"}
              </p>
              <div className="flex justify-end gap-3">
                {/* Ver */}
                <Link
                  to={`/editorial/artigos/ver/${a.id}`}
                  className="text-gray-700 hover:text-gray-900"
                  title="Visualizar"
                >
                  <FiBookOpen size={18} />
                </Link>

                {/* Editar */}
                {user?.role === "profissional" ||
                user?.role === "admin" ||
                (user?.role === "editorial" && a.status === "pendente") ? (
                  <Link
                    to={`/editorial/artigos/editar/${a.id}`}
                    className="text-blue-600 hover:text-blue-800"
                    title="Editar"
                  >
                    <FiEdit size={18} />
                  </Link>
                ) : null}

                {/* Excluir */}
                {(user?.role === "profissional" || user?.role === "admin") && (
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Excluir"
                  >
                    <FiTrash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view (tabela) */}
        <div className="hidden md:block bg-white shadow rounded-lg overflow-hidden overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Título</th>
                <th className="p-3">Categoria</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Publicado em</th>
                <th className="p-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {artigosFiltrados.map((a) => (
                <tr key={a.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{a.titulo}</td>
                  <td className="p-3">{a.categoria}</td>
                  <td
                    className={`p-3 capitalize ${
                      a.status === "publicado"
                        ? "text-green-600"
                        : a.status === "pendente"
                        ? "text-yellow-600"
                        : "text-gray-600"
                    }`}
                  >
                    {a.status}
                  </td>
                  <td className="p-3">
                    {a.published_at
                      ? new Date(a.published_at).toLocaleDateString("pt-PT")
                      : "-"}
                  </td>
                  <td className="p-3 flex gap-3 justify-end">
                    {/* Ver */}
                    <Link
                      to={`/editorial/artigos/ver/${a.id}`}
                      className="text-gray-700 hover:text-gray-900"
                      title="Visualizar"
                    >
                      <FiBookOpen size={18} />
                    </Link>

                    {/* Editar */}
                    {user?.role === "profissional" ||
                    user?.role === "admin" ||
                    (user?.role === "editorial" && a.status === "pendente") ? (
                      <Link
                        to={`/editorial/artigos/editar/${a.id}`}
                        className="text-blue-600 hover:text-blue-800"
                        title="Editar"
                      >
                        <FiEdit size={18} />
                      </Link>
                    ) : null}

                    {/* Excluir */}
                    {(user?.role === "profissional" || user?.role === "admin") && (
                      <button
                        onClick={() => handleDelete(a.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Excluir"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {artigosFiltrados.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-500">
                    Nenhum artigo encontrado
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

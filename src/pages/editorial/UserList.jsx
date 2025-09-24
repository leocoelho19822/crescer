// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiEdit,
  FiTrash2,
  FiSearch,
  FiFilter,
  FiUsers,
} from "react-icons/fi";
import HeaderEdit from "./HeaderEdit";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filtroRole, setFiltroRole] = useState("todos");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data.users || []));
  }, []);

  const usersFiltrados = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchRole =
      filtroRole === "todos" ? true : u.role === filtroRole;

    return matchSearch && matchRole;
  });

  const handleDelete = (id) => {
    if (window.confirm("Tens a certeza que desejas excluir este utilizador?")) {
      console.log("Excluir utilizador:", id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderEdit user={user} />

      <main className="p-4 max-w-7xl mx-auto">
        {/* Título + Filtros */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FiUsers className="text-[#78B19A]" />
            Gestão de Utilizadores
          </h1>

          <div className="flex gap-3">
            {/* Pesquisa */}
            <div className="flex items-center bg-white rounded-lg shadow px-3 py-2">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Pesquisar por nome ou email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-48 md:w-64 outline-none text-sm"
              />
            </div>

            {/* Filtro de Role */}
            <div className="flex items-center bg-white rounded-lg shadow px-3 py-2">
              <FiFilter className="text-gray-500 mr-2" />
              <select
                value={filtroRole}
                onChange={(e) => setFiltroRole(e.target.value)}
                className="text-sm outline-none bg-transparent"
              >
                <option value="todos">Todos</option>
                <option value="admin">Admin</option>
                <option value="profissional">Profissional</option>
                <option value="editorial">Editorial</option>
                <option value="geral">Geral</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botão Novo Utilizador */}
        <div className="flex justify-end mb-6">
          <Link
            to="/editorial/users/novo"
            className="bg-[#78B19A] hover:bg-[#5e8e79] text-white px-4 py-2 rounded-lg shadow transition flex items-center gap-2"
          >
            + Novo Utilizador
          </Link>
        </div>

        {/* Mobile view (cards) */}
        <div className="md:hidden space-y-4">
          {usersFiltrados.map((u) => (
            <div key={u.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-lg mb-1">{u.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{u.email}</p>
              <p className="text-sm text-gray-500 mb-3 capitalize">
                Role: {u.role}
              </p>
              <div className="flex justify-end gap-3">
                {/* Editar */}
                <Link
                  to={`/editorial/users/editar/${u.id}`}
                  className="text-blue-600 hover:text-blue-800"
                  title="Editar"
                >
                  <FiEdit size={18} />
                </Link>

                {/* Excluir */}
                <button
                  onClick={() => handleDelete(u.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Excluir"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view (tabela) */}
        <div className="hidden md:block bg-white shadow rounded-lg overflow-hidden overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Nome</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {usersFiltrados.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3 capitalize">{u.role}</td>
                  <td className="p-3 flex gap-3 justify-end">
                    <Link
                      to={`/editorial/users/editar/${u.id}`}
                      className="text-blue-600 hover:text-blue-800"
                      title="Editar"
                    >
                      <FiEdit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Excluir"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {usersFiltrados.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-500">
                    Nenhum utilizador encontrado
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

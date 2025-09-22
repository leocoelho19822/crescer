// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import {
  FiFileText,
  FiUsers,
  FiUserCheck,
  FiUserPlus,
  FiUser,
  FiCalendar,
  FiGrid
} from "react-icons/fi";

import StatCard from "./StatCard";
import HeaderEdit from "./HeaderEdit";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [artigos, setArtigos] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = "/editorial";
    }

    fetch("/data/artigos.json")
      .then((res) => res.json())
      .then((data) => setArtigos(data.artigos || []));

    fetch("/data/eventos.json")
      .then((res) => res.json())
      .then((data) => setEventos(data.eventos || []));

    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data.users || []));
  }, []);

  if (!user) return null;

  // Estatísticas
  const artigosPublicados = artigos.filter((a) => a.status === "publicado").length;
  const artigosPendentes = artigos.filter((a) => a.status === "pendente").length;

  const eventosPublicados = eventos.filter((e) => e.ativo).length;
  const eventosPendentes = eventos.filter((e) => !e.ativo).length;

  const totalUsers = users.length;
  const countAdmins = users.filter((u) => u.role === "admin").length;
  const countProfissionais = users.filter((u) => u.role === "profissional").length;
  const countEditorais = users.filter((u) => u.role === "editorial").length;
  const countGerais = users.filter((u) => u.role === "geral").length;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header reutilizável */}
      <HeaderEdit user={user} />

      {/* Cards */}
      <main className="p-4 max-w-7xl mx-auto">
      {/* Título */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
          <FiGrid className="text-[#78B19A]" />
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">Visão geral do sistema administrativo</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Artigos */}
          <StatCard
            titulo="Artigos"
            publicados={artigosPublicados}
            pendentes={artigosPendentes}
            Icon={FiFileText}
            cor="bg-green-500"
            link="/editorial/artigos"
          />

          {/* Eventos */}
          <StatCard
            titulo="Eventos"
            publicados={eventosPublicados}
            pendentes={eventosPendentes}
            Icon={FiCalendar}
            cor="bg-blue-500"
            link="/editorial/eventos"
          />

          {/* Só admin vê estatísticas de utilizadores */}
          {user.role === "admin" && (
            <>
              <StatCard
                titulo="Total de utilizadores"
                publicados={totalUsers}
                pendentes={0}
                Icon={FiUsers}
                cor="bg-indigo-500"
                link="/admin/users"
              />
              <StatCard
                titulo="Admins"
                publicados={countAdmins}
                pendentes={0}
                Icon={FiUserCheck}
                cor="bg-purple-500"
                link="/admin/users"
              />
              <StatCard
                titulo="Profissionais"
                publicados={countProfissionais}
                pendentes={0}
                Icon={FiUserCheck}
                cor="bg-green-500"
                link="/admin/users"
              />
              <StatCard
                titulo="Editoriais"
                publicados={countEditorais}
                pendentes={0}
                Icon={FiUserPlus}
                cor="bg-orange-500"
                link="/admin/users"
              />
              <StatCard
                titulo="Utilizadores Gerais"
                publicados={countGerais}
                pendentes={0}
                Icon={FiUser}
                cor="bg-gray-500"
                link="/admin/users"
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

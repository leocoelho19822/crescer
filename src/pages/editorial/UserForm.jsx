// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import HeaderEdit from "./HeaderEdit";

export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("user"));

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "geral",
    ativo: true,
  });

  useEffect(() => {
    if (id) {
      fetch("/data/users.json")
        .then((res) => res.json())
        .then((data) => {
          const encontrado = data.users.find((a) => a.id === parseInt(id));
          if (encontrado) {
            setUserForm({ ...encontrado, password: "" }); // não mostramos a senha
          }
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoUser = {
      id: id || `user${Date.now()}`,
      name: userForm.name,
      email: userForm.email,
      role: userForm.role,
      ativo: userForm.ativo,
      // Só grava password se for novo ou alterada
      ...(userForm.password ? { password: userForm.password } : {}),
    };

    console.log("JSON a gravar na BD:", JSON.stringify(novoUser, null, 2));

    navigate("/admin/users");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderEdit user={admin} />

      <main className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiUser className="text-[#78B19A]" />
          {id ? "Editar Utilizador" : "Criar Novo Utilizador"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow rounded-xl space-y-6"
        >
          {/* Nome */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiUser /> Nome
            </label>
            <input
              type="text"
              name="name"
              value={userForm.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiMail /> Email
            </label>
            <input
              type="email"
              name="email"
              value={userForm.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              required
            />
          </div>

          {/* Password (só no criar ou se quiser alterar) */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiLock /> Password
            </label>
            <input
              type="password"
              name="password"
              value={userForm.password}
              onChange={handleChange}
              placeholder={id ? "Deixe em branco para não alterar" : ""}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              {...(!id ? { required: true } : {})}
            />
          </div>

          {/* Role */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiShield /> Role
            </label>
            <select
              name="role"
              value={userForm.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none capitalize"
            >
              <option value="admin">Admin</option>
              <option value="profissional">Profissional</option>
              <option value="editorial">Editorial</option>
              <option value="geral">Geral</option>
            </select>
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
                checked={userForm.ativo}
                onChange={handleChange}
                className="w-4 h-4 text-[#78B19A] border-gray-300 rounded focus:ring-[#78B19A]"
              />
              <span className="text-sm">
                {userForm.ativo ? "Ativo" : "Inativo"}
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

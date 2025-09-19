// eslint-disable-next-line
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../assets/verde1.svg"; 

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErro("Preencha todos os campos.");
      return;
    }
    setErro("");
    alert("Sessão iniciada com sucesso!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Cres(Ser)" className="h-10" />
        </div>

        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">
          Editorial / Admin
        </h2>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {erro && (
            <p className="text-red-500 text-sm text-center">{erro}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={mostrarPassword ? "text" : "password"}
              placeholder="Palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              onClick={() => setMostrarPassword(!mostrarPassword)}
            >
              {mostrarPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* Link */}
          <div className="text-right">
            <a
              href="/reset-password"
              className="text-sm text-gray-600 hover:text-emerald-600"
            >
              Esqueceu-se da palavra-passe?
            </a>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full py-3 bg-emerald-400 text-white font-medium rounded-lg shadow hover:bg-emerald-500 transition"
          >
            Iniciar Sessão
          </button>
        </form>
      </div>
    </div>
  );
}

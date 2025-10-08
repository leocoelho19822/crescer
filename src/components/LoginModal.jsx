// eslint-disable-next-line
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import logo from "../assets/verde1.svg";
import Button from "./Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

// eslint-disable-next-line
export default function LoginModal({ setIsOpen, setModalType, setUser, setIsAuthenticated }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/data/users.json");
      const data = await res.json();
      const users = data.users || [];

      const user = users.find(
        (u) => u.email === email && u.password_hash === password
      );


      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
        setIsOpen(false);
      } else {
        setError("E-mail ou senha inválidos.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao aceder ao ficheiro de utilizadores.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-2xl p-8 w-[360px] shadow-md relative"
        onClick={(e) => e.stopPropagation()}
      >

        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        <img src={logo} alt="Cres(Ser)" className="mx-auto mb-4 h-14" />
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Entrar</h2>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            aria-label="Email login"
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Email"
            required
          />

          <div className="relative mb-6">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="palavra passe login"
              autoComplete="current-password"
              className="w-full border-b-2 border-black text-sm py-2 px-1 pr-10 focus:outline-none rounded-xl"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {passwordVisible ? <FiEyeOff size={15} /> : <FiEye size={15} />}
            </span>
          </div>

          <div className="text-center text-sm text-gray-500 mb-4">
            <button
              type="button"
              className="underline cursor-pointer"
              onClick={() => setModalType("forgot-password")}
            >
              Esqueceu sua senha?
            </button>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <ClipLoader size={20} color="#000" /> : "Iniciar Sessão"}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Sem registo?{" "}
          <button
            className="underline cursor-pointer"
            onClick={() => setModalType("register")}
          >
            Faça aqui seu registo!
          </button>
        </div>
      </div>
    </div>
  );
}

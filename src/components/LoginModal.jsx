// eslint-disable-next-line
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthState } from "../store/authSlice";
import { useLoginMutation, useGetProfileQuery } from "../store/api";
import { ClipLoader } from "react-spinners";
import logo from "../assets/verde1.svg"; 
import Button from "./Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

// eslint-disable-next-line
export default function LoginModal({ setIsOpen, setModalType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { refetch } = useGetProfileQuery();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await login({ email, password }).unwrap();
      dispatch(setAuthState({ user: data.user, isAuthenticated: true }));
      await refetch();
      setIsOpen(false);
    } catch (err) {
      if (err?.status === 403) {
        setError("Seu e-mail ainda não foi verificado. Verifique sua caixa de entrada.");
      } else {
        setError("E-mail ou senha inválidos.");
      }
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
        <img src={logo} alt="Cres(Ser)" className="mx-auto mb-4 h-10" />
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Entrar</h2>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Email"
            required
          />

          <div className="relative mb-6">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
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

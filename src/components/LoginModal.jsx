// eslint-disable-next-line
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthState  } from "../store/authSlice";
import { useLoginMutation, useGetProfileQuery } from "../store/api";
import { ClipLoader } from "react-spinners";

// eslint-disable-next-line
export default function LoginModal({ setIsOpen, setModalType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { refetch } = useGetProfileQuery();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await login({ email, password }).unwrap();
      dispatch(setAuthState({ user: data.user, isAuthenticated: true }));
      await refetch();
      setIsOpen(false);
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      if (err?.status === 403) {
        setError("Seu e-mail ainda não foi verificado. Verifique sua caixa de entrada.");
      } else {
        setError("E-mail ou senha inválidos.");
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-900/90 flex justify-center items-center"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <label className="block text-sm font-semibold text-gray-700">E-mail *</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Digite seu e-mail"
            required
          />

          <label className="block text-sm font-semibold text-gray-700">Senha *</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Digite sua senha"
            required
          />

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-3xl hover:bg-blue-700 mt-4 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader size={20} color="#FFF" />
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <button 
            className="text-blue-600 underline text-sm cursor-pointer"
            onClick={() => setModalType("forgot-password")}
          >
            Esqueci minha senha
          </button>
        </div>

        <div className="text-center mt-2">
          <span className="text-gray-600">Não tem uma conta? </span>
          <button 
            className="text-blue-600 underline text-sm cursor-pointer"
            onClick={() => setModalType("register")}
          >
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}

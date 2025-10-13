// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { FiEye, FiEyeOff } from "react-icons/fi";

import logo from "../assets/verde1.svg";
import Button from "./Button";
import { useLoginMutation, useGetProfileQuery } from "../store/api";
import { setAuthState } from "../store/authSlice";
import { GoogleLogin } from "@react-oauth/google";


// eslint-disable-next-line
export default function LoginModal({ setIsOpen, setModalType }) {
  const dispatch = useDispatch();

  // Estados locais
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // RTK Query mutation
  const [login, { isLoading, isSuccess, isError, error: loginError }] = useLoginMutation();

  // Atualiza o perfil após login bem-sucedido
  const { data: profileData, refetch } = useGetProfileQuery(undefined, {
    skip: !isSuccess,
  });

  // Efeito: quando o login for bem-sucedido, buscar perfil
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  // Efeito: quando o perfil for carregado, atualizar o estado global
  useEffect(() => {
    if (profileData) {
      dispatch(setAuthState({ user: profileData, isAuthenticated: true }));
      setIsOpen(false);
    }
  }, [profileData, dispatch, setIsOpen]);

  // Efeito: mostrar erro do servidor
  useEffect(() => {
    if (isError && loginError?.data?.message) {
      setError(loginError.data.message);
    }
  }, [isError, loginError]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login({ email, password }).unwrap();
    } catch (err) {
      console.error("Erro no login:", err);
      setError(err?.data?.message || "Falha no login. Tente novamente.");
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
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Entrar
        </h2>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
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
              Esqueceu a sua senha?
            </button>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <ClipLoader size={20} color="#000" /> : "Iniciar Sessão"}
          </Button>
        </form>

        <div className="mt-4">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            try {
              const res = await fetch("https://api.projetocrescer.pt/api/users/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ token: credentialResponse.credential }),
              });

              const data = await res.json();

              if (res.ok && data.user) {
                // ✅ Atualiza o Redux e fecha modal
                dispatch(setAuthState({ user: data.user, isAuthenticated: true }));
                setIsOpen(false);
              } else {
                console.error("Erro no login com Google:", data);
                setError(data.message || "Falha ao autenticar com o Google.");
              }
            } catch (err) {
              console.error("Falha no login Google:", err);
              setError("Erro ao autenticar com o Google.");
            }
          }}
          onError={() => setError("Erro ao autenticar com o Google.")}
        />

      </div>


        <div className="text-center text-sm text-gray-500 mt-6">
          Sem registo?{" "}
          <button
            className="underline cursor-pointer"
            onClick={() => setModalType("register")}
          >
            Faça aqui o seu registo!
          </button>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Button from "./Button";
import { useSendResetPasswordMutation } from "../store/api";

// eslint-disable-next-line
export default function ForgotPasswordModal({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Mutation RTK Query
  const [sendResetEmail, { isLoading, isSuccess, isError, error: sendError }] =
    useSendResetPasswordMutation();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      await sendResetEmail({ email }).unwrap();
    } catch (err) {
      console.error("Erro ao enviar e-mail de redefinição:", err);
      setError(
        err?.data?.message ||
          "Erro ao solicitar redefinição de senha. Tente novamente."
      );
    }
  };

  // Feedback automático
  useEffect(() => {
    if (isSuccess) {
      setMessage("Se o e-mail estiver registado, enviámos um link de redefinição.");
    }
    if (isError && sendError?.data?.message) {
      setError(sendError.data.message);
    }
  }, [isSuccess, isError, sendError]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center px-4 items-center z-[101]"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Recuperar Senha</h2>

        {message && (
          <p className="text-green-600 text-center bg-green-100 p-2 rounded mb-3">
            {message}
          </p>
        )}
        {error && (
          <p className="text-red-600 text-center bg-red-100 p-2 rounded mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleResetPassword}>
          <label className="block text-sm font-semibold text-gray-700">
            E-mail *
          </label>
          <input
            type="email"
            value={email}
            autoComplete="email"
            aria-label="email esqueci senha"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Digite o seu e-mail"
            required
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <ClipLoader size={20} color="#000" />
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

// eslint-disable-next-line
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../store/api";

function ResetPassword() {
  const { token } = useParams(); // Captura o token da URL
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  //console.log(token);

  const handleReset = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await resetPassword({ token, password }).unwrap();
      setMessage("Senha redefinida com sucesso! Você será redirecionado para o login.");
      setTimeout(() => navigate("/"), 2000);
      // eslint-disable-next-line
    } catch (err) {
      setError("Erro ao redefinir a senha. O link pode ter expirado.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Redefinir Senha</h2>

        {message && <p className="text-green-500 text-center bg-green-100 p-2 rounded">{message}</p>}
        {error && <p className="text-red-500 text-center bg-red-100 p-2 rounded">{error}</p>}

        <form onSubmit={handleReset}>
          <label className="block text-sm font-semibold text-gray-700">Nova Senha *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Digite sua nova senha"
          />

          <label className="block text-sm font-semibold text-gray-700">Confirme a Senha *</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Confirme sua nova senha"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-3xl hover:bg-blue-700 mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Alterando..." : "Redefinir Senha"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;

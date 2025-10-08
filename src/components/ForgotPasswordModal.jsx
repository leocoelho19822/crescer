// eslint-disable-next-line
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Button from "./Button";

// eslint-disable-next-line
function ForgotPasswordModal({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setIsLoading(true);

    try {
      // verificar no localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const user = storedUsers.find((u) => u.email === email);

      if (user) {
        setMessage("Verifique seu e-mail, enviaremos um link de redefinição (simulação).");
      } else {
        setError("E-mail não cadastrado. Verifique o e-mail digitado.");
      }
    } catch {
      setError("Erro ao solicitar redefinição de senha. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

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

        {message && <p className="text-green-500 text-center bg-green-100 p-2 rounded">{message}</p>}
        {error && <p className="text-red-500 text-center bg-red-100 p-2 rounded">{error}</p>}

        <form onSubmit={handleResetPassword}>
          <label className="block text-sm font-semibold text-gray-700">E-mail *</label>
          <input 
            type="email"
            value={email}
            autoComplete='email'
            aria-label="email esqueci senha"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Digite seu e-mail"
            required
          />

          <Button 
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader size={20} color="#000" /> : "Enviar"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;

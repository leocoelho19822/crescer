// eslint-disable-next-line
import React, { useState } from "react";
import { useSendResetPasswordMutation } from "../store/api";
import { ClipLoader } from "react-spinners";

// eslint-disable-next-line
function ForgotPasswordModal({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [sendResetPassword, { isLoading }] = useSendResetPasswordMutation();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
        await sendResetPassword({ email }).unwrap();
        setMessage("Verifique seu e-mail, enviaremos um link de redefinição.");
    } catch (err) {
        console.error("Erro ao solicitar redefinição de senha:", err);
        
        // Verifica se o erro é de e-mail não encontrado
        if (err?.data?.message === "E-mail não encontrado na base de dados.") {
            setError("E-mail não cadastrado. Verifique o e-mail digitado.");
        } else {
            setError("Erro ao solicitar redefinição de senha. Tente novamente.");
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
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Digite seu e-mail"
          />

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-3xl hover:bg-blue-700 mt-4 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader size={20} color="#FFF" /> : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;

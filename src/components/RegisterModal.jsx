// eslint-disable-next-line
import React, { useState } from "react";
import { useRegisterMutation } from "../store/api";
import { ClipLoader } from "react-spinners";

// eslint-disable-next-line
function RegisterModal({ setIsOpen, setModalType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [passwordValid, setPasswordValid] = useState(false);
  
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!passwordValid) {
      setError("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.");
      return;
    }

    try {
        await registerUser({ name, email, password, phone }).unwrap();
        setSuccess("Conta criada com sucesso! Verifique seu e-mail para ativar a conta.");
    } catch (err) {
        console.log("Erro capturado:", err);
    
        if (err?.data?.message === "E-mail já existe em nossa base de dados") {
            setError("Este e-mail já está em uso. Tente outro ou faça login.");
        } else {
            setError("Erro ao criar conta. Tente novamente mais tarde.");
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

        <h2 className="text-2xl font-bold mb-4 text-center">Criar Conta</h2>

        {error && <p className="text-red-500 text-center bg-red-100 p-2 rounded">{error}</p>}
        {success && <p className="text-green-500 text-center bg-green-100 p-2 rounded">{success}</p>}

        <form onSubmit={handleRegister}>
          <label className="block text-sm font-semibold text-gray-700">Nome *</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Seu nome"
            required
          />

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
            onChange={handlePasswordChange}
            className="w-full p-2 mb-2 border rounded"
            placeholder="Digite sua senha"
            required
          />
          <p className={passwordValid ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
            {passwordValid ? "Senha válida ✅" : "A senha deve ter 8+ caracteres, incluindo uma maiúscula, um número e um símbolo."}
          </p>

          <label className="block text-sm font-semibold text-gray-700">Telefone *</label>
          <input 
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Digite seu telefone"
            required
          />

          <button 
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-3xl cursor-pointer hover:bg-green-700 mt-4"
            disabled={isLoading || !passwordValid}
          >
            {isLoading ? <ClipLoader size={20} color="#FFF" /> : "Criar Conta"}
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-gray-600">Já tem uma conta? </span>
          <button 
            className="text-blue-600 underline text-sm cursor-pointer"
            onClick={() => setModalType("login")}
          >
            Fazer login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;

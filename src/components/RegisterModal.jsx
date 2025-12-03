// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRegisterMutation } from "../store/api";
import logo from "../assets/verde1.svg";
import Button from "./Button";

// eslint-disable-next-line
export default function RegisterModal({ setIsOpen, setModalType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("geral"); // valor padrão (pode mudar depois, se quiseres incluir perfis profissionais)
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const [register, { isLoading, isSuccess, isError, error: registerError }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      setSuccess("Conta criada com sucesso! Verifique o seu e-mail para ativar a conta.");
      setError(null);
      setName("");
      setEmail("");
      setPassword("");
    }
    if (isError && registerError?.data?.message) {
      setError(registerError.data.message);
    }
  }, [isSuccess, isError, registerError]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validatePassword(password)) {
      setPasswordValid(false);
      setError("A senha deve ter 8+ caracteres, incluindo uma maiúscula, um número e um símbolo.");
      return;
    }

    setPasswordValid(true);

    // Estrutura compatível com o novo modelo Sequelize
    const newUser = {
      name,
      email,
      password,
      role, // "geral", "profissional", "editor" etc.
      title: null,
      specialty: null,
      imagem: null,
      favorites: [],
      active: true,
      email_verified: false,
      preferences: {
        idioma: "pt-PT",
        notificacoes: true,
        tema: "claro",
      },
    };

    try {
      await register(newUser).unwrap();
    } catch (err) {
      console.error("Erro no registo:", err);
      setError(err?.data?.message || "Erro ao criar conta. Tente novamente.");
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

        <img src={logo} alt="Cres(SER)" className="mx-auto mb-4 h-14" />
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6 ">
          Criar Conta
        </h2>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        {success && <p className="text-center text-green-500 mb-4">{success}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Digite o seu nome"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Digite o seu e-mail"
            required
          />

          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => {
                const val = e.target.value;
                setPassword(val);
                setPasswordValid(validatePassword(val));
              }}
              className="w-full border-b-2 border-black text-sm py-2 px-1 mb-1 focus:outline-none rounded-xl"
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

          {password.length > 0 && (
            <p
              className={`${passwordValid ? "text-verde-100" : "text-red-600"} text-sm mb-4`}
            >
              {passwordValid
                ? "Senha válida ✅"
                : "A senha deve ter 8+ caracteres, incluindo uma maiúscula, um número e um símbolo."}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <ClipLoader size={20} color="#000" /> : "Registar"}
          </Button>
        </form>

        <hr className="my-6 border-gray-300" />

        <div className="text-center text-sm text-gray-600">
          Já tem conta?{" "}
          <button
            className="underline cursor-pointer"
            onClick={() => setModalType("login")}
          >
            Inicie sessão
          </button>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line
import React, { useState } from "react";
import { useRegisterMutation } from "../store/api";
import { ClipLoader } from "react-spinners";
import logo from "../assets/verde1.svg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "./Button";


// eslint-disable-next-line
function RegisterModal({ setIsOpen, setModalType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);


  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const isPasswordOk = validatePassword(password);
    setPasswordValid(isPasswordOk);

    if (!isPasswordOk) {
      setError("A senha deve ter 8+ caracteres, incluindo uma maiúscula, um número e um símbolo.");
      return;
    }

    try {
      await registerUser({ name, email, password, phone }).unwrap();
      setSuccess("Conta criada com sucesso! Verifique seu e-mail.");
    } catch (err) {
      if (err?.data?.message === "E-mail já existe em nossa base de dados") {
        setError("Este e-mail já está em uso. Tente outro ou faça login.");
      } else {
        setError("Erro ao criar conta. Tente novamente.");
      }
    }
  };


    const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
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
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6 ">
          Registe-se
        </h2>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        {success && <p className="text-center text-green-500 mb-4">{success}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Digite seu nome"
            required
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Digite seu telefone"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-black text-sm py-2 px-1 mb-6 focus:outline-none rounded-xl"
            placeholder="Digite seu e-mail"
            required
          />
          
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => {
                const newPassword = e.target.value;
                setPassword(newPassword);
                setPasswordValid(validatePassword(newPassword));
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
            <p className={`${passwordValid ? "text-green-600" : "text-red-600"} text-sm mb-4`}>
              {passwordValid
                ? "Senha válida ✅"
                : "A senha deve ter 8+ caracteres, incluindo uma maiúscula, um número e um símbolo."}
            </p>
          )}




          <Button
            type="submit"
            className="w-full "
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader size={20} color="#000" /> : "Continuar"}
          </Button>
        </form>

        <hr className="my-6 border-gray-300" />

        <div className="text-center text-sm text-gray-600">
          Já é membro?{" "}
          <button
            className="underline"
            onClick={() => setModalType("login")}
          >
            Entrar!
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;

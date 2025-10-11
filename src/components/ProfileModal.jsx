// eslint-disable-next-line
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiUpload, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { clearAuthState } from "../store/authSlice";
import { useLogoutMutation } from "../store/api";
import { googleLogout } from "@react-oauth/google"; // ✅ logout do Google

// eslint-disable-next-line
export default function ProfileModal({ setIsOpen }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [logoutUser] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      // 🔹 1. Faz logout no backend (remove cookie)
      await logoutUser().unwrap();

      // 🔹 2. Se a sessão for do Google, encerra também
      googleLogout();

      // 🔹 3. Limpa Redux + localStorage
      dispatch(clearAuthState());
      localStorage.removeItem("user");
      localStorage.removeItem("favoritos");
      localStorage.removeItem("inscricoes");

      // 🔹 4. Fecha modal
      setIsOpen(false);

      // (opcional) Força recarregar a página
      // window.location.reload();
    } catch (error) {
      console.error("Erro ao encerrar sessão:", error);
    }
  };

  if (!user) {
    return (
      <div
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-[360px] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <p className="text-center text-red-500">
            Nenhum utilizador autenticado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[360px] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black z-10"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        {/* Avatar */}
        <div className="flex justify-center items-center pt-10">
          <div className="relative">
            {user?.imagem ? (
              <img
                src={user.imagem}
                alt="Foto de perfil"
                className="w-44 h-44 rounded-full border-4 border-white object-cover shadow-md"
              />
            ) : (
              <div className="w-44 h-44 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center shadow-md">
                <CgProfile className="text-gray-500" size={48} />
              </div>
            )}
            {/* Botão upload (futuro) */}
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100">
              <FiUpload className="text-emerald-600" size={18} />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="pt-6 pb-6 px-6 text-center">
          <h2 className="text-xl font-bold">{user.name || "—"}</h2>
          <p className="text-gray-600">{user.email}</p>

          {/* Botão encerrar sessão */}
          <button
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white p-2 rounded-3xl cursor-pointer hover:bg-red-600 mt-6"
            onClick={handleLogout}
          >
            <FiLogOut size={18} />
            Encerrar sessão
          </button>
        </div>
      </div>
    </div>
  );
}

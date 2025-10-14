// eslint-disable-next-line
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiUpload, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { clearAuthState, setAuthState } from "../store/authSlice";
import { useLogoutMutation } from "../store/api";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line
export default function ProfileModal({ setIsOpen }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [logoutUser] = useLogoutMutation();
  const navigate = useNavigate();

  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      googleLogout();
      dispatch(clearAuthState());
      localStorage.removeItem("user");
      localStorage.removeItem("favoritos");
      localStorage.removeItem("inscricoes");
      setIsOpen(false);
      navigate(0);
    } catch (error) {
      console.error("Erro ao encerrar sessão:", error);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("imagem", file);

    try {
      const res = await fetch("https://api.projetocrescer.pt/api/users/upload-photo", {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(setAuthState({ user: { ...user, imagem: data.imagem }, isAuthenticated: true }));
      } else {
        console.error("Erro no upload:", data.message);
        alert(data.message || "Falha ao atualizar imagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
    } finally {
      setUploading(false);
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

            {/* Botão upload */}
            <button
              className={`absolute bottom-2 right-2 bg-white p-2 rounded-full cursor-pointer shadow hover:bg-gray-100 ${
                uploading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              onClick={() => fileInputRef.current.click()}
              disabled={uploading}
              title="Alterar foto de perfil"
            >
              <FiUpload className="text-emerald-600" size={18} />
            </button>

            {/* Input invisível */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/webp"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="pt-6 pb-6 px-6 text-center">
          <h2 className="text-xl font-bold">{user.name || "—"}</h2>
          <p className="text-gray-600">{user.email}</p>

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

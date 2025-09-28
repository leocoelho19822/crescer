// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { FiUpload, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
// eslint-disable-next-line
function ProfileModal({ setIsOpen, handleLogout }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  if (!userData) {
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
            {userData?.imagem ? (
              <img
                src={userData.imagem}
                alt="Foto de perfil"
                className="w-44 h-44 rounded-full border-4 border-white object-cover shadow-md"
              />
            ) : (
              <div className="w-44 h-44 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center shadow-md">
                <CgProfile className="text-gray-500" size={48} />
              </div>
            )}
            {/* Botão de upload */}
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100">
              <FiUpload className="text-emerald-600" size={18} />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="pt-6 pb-6 px-6 text-center">
          <h2 className="text-xl font-bold">{userData.name || "—"}</h2>
          <p className="text-gray-600">{userData.email}</p>

          {/* Botão encerrar sessão */}
          <button
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white p-2 rounded-3xl cursor-pointer hover:bg-red-600 mt-6"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("favoritos");
              localStorage.removeItem("inscricoes");
              handleLogout?.();
              setIsOpen(false);
            }}
          >
            <FiLogOut size={18} />
            Encerrar sessão
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;

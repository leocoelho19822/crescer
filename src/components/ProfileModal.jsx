// eslint-disable-next-line
import React, { useEffect, useState } from "react";

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
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]" onClick={() => setIsOpen(false)}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
          <button 
            className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <p className="text-center text-red-500">Nenhum utilizador autenticado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]" onClick={() => setIsOpen(false)}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">A sua conta</h2>
        <ul className="space-y-2">
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Nome:</strong> {userData.nome || "—"}</p>
          <p><strong>Telefone:</strong> {userData.phone || "—"}</p>
          <li>
            <button 
              className="w-full bg-red-500 text-white p-2 rounded-3xl cursor-pointer hover:bg-red-600 mt-4"
              onClick={() => {
                localStorage.removeItem("user");
                handleLogout?.(); // se foi passado do pai
                setIsOpen(false);
              }}
            >
              Encerrar sessão
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileModal;

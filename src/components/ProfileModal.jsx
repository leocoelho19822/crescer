// eslint-disable-next-line
import React from "react";
import { useGetProfileQuery } from "../store/api";

// eslint-disable-next-line
function ProfileModal({ setIsOpen, handleLogout }) {

    const { data: userData, error, isLoading } = useGetProfileQuery();

    if (isLoading) return <p className="text-center">Carregando...</p>;
    if (error) return <p className="text-center text-red-500">Erro ao carregar dados.</p>;

    return (
      <div className="fixed inset-0 bg-gray-900/90 flex justify-center items-center" onClick={() => setIsOpen(false)}>
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
            <p><strong>Nome:</strong> {userData.name}</p>
            <p><strong>Telefone:</strong> {userData.phone}</p>
            <li>
              <button 
                className="w-full bg-red-500 text-white p-2 rounded-3xl cursor-pointer hover:bg-red-600 mt-4"
                onClick={handleLogout}
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
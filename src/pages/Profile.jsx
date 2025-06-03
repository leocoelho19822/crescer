// eslint-disable-next-line
import React from 'react';

import { useGetProfileQuery } from "../store/api";


export default function Profile() {
  
  const { data: userData, error, isLoading } = useGetProfileQuery();

  if (isLoading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">Erro ao carregar dados.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Perfil</h2>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Nome:</strong> {userData.name}</p>
        <p><strong>Telefone:</strong> {userData.phone}</p>
        
      </div>
    </div>
  );
}

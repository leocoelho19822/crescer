import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Página não encontrada.</p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Voltar à página inicial
      </Link>
    </div>
  );
}

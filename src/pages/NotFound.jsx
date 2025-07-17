// eslint-disable-next-line
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Página não encontrada.</p>

      <Button onClick={() => navigate("/")}>
        Voltar à página inicial
      </Button>
    </div>
  );
}

// eslint-disable-next-line
import React, { useEffect, useState } from "react";

export default function AdminAttempt() {
  const [mensagem, setMensagem] = useState("A verificar o acesso...");

  useEffect(() => {
    // Faz uma requisição ao backend para forçar o registo do log
    fetch("https://api.projetocrescer.pt/api/logs/admin-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setMensagem("🚨 Tentativa de acesso registada no sistema.");
        } else {
          setMensagem("⚠️ Não foi possível registar o acesso.");
        }
      })
      .catch(() => {
        setMensagem("⚠️ Erro ao comunicar com o servidor.");
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Acesso restrito
      </h1>
      <p className="text-gray-700 text-lg max-w-md">
        Esta área é exclusiva para administradores. <br />
        {mensagem}
      </p>
    </div>
  );
}

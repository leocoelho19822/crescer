// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../store/api";

function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verifyEmail, { isLoading, isError, error, isSuccess }] = useVerifyEmailMutation();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function verify() {
      try {
        const response = await verifyEmail(token).unwrap();
        setMessage(response.message);
        setTimeout(() => navigate("/"), 3000);
      } catch (err) {
        console.error("Erro na verificação:", err);
      }
    }

    verify();
  }, [token, verifyEmail, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Verificação de E-mail</h2>

        {isLoading && <p className="text-blue-500">Verificando...</p>}
        {isSuccess && <p className="text-green-500 bg-green-100 p-2 rounded">{message}</p>}
        {isError && <p className="text-red-500 bg-red-100 p-2 rounded">{error?.data?.message || "Erro ao verificar o e-mail."}</p>}
      </div>
    </div>
  );
}

export default VerifyEmail;

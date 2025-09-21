// eslint-disable-next-line
import React from "react";
import Button from "./Button";

// eslint-disable-next-line
export default function ConfirmOverlay({ mensagem, onConfirm, onCancel, tipo = "confirm" }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200]">
      <div className="bg-white rounded-2xl p-6 w-[360px] shadow-md">
        <p className="text-center text-lg text-gray-800 mb-6">{mensagem}</p>

        {tipo === "confirm" ? (
          <div className="flex justify-center gap-4">
            <Button
              onClick={onConfirm}
              className="hover:bg-emerald-400 cursor-pointer"
            >
              Confirmar
            </Button>
            <Button
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 cursor-pointer"
            >
              Cancelar
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button
              onClick={onCancel}
              className="hover:bg-emerald-400 cursor-pointer"
            >
              Fechar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

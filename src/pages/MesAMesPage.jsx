// eslint-disable-next-line
import React from "react";
import MesamesSection from "../components/MesamesSection";

export default function MesaMes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800 space-y-8">
      <h1 className="text-5xl md:text-4xl font-bold mb-4">
        Mês a mês. Um guia para cada etapa
      </h1>
      <MesamesSection />

      
        <div className="prose prose-zinc max-w-none">
          <p>
            Fale com a sua médica ou enfermeira de família, ou contacte
            diretamente a equipa do Centro de Saúde de Águeda:{" "}
            <strong>234 610 210</strong> (3ªs e 5ªs, das 10h às 13h)
          </p>

          <p className="italic text-2xl md:text-3xl my-10 text-center">
            “Se mudarmos o início da história, mudamos toda a história.”
          </p>
        </div>
      
    </div>
  );
}

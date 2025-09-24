// eslint-disable-next-line
import React from "react";
import MesamesSection from "../components/MesamesSection";
import RecursosPensadosParaSi from "../components/RecursosPensadosParaSi";

export default function MesaMes() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24 text-zinc-800 space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Mês a mês. Um guia para cada etapa
      </h1>
      <MesamesSection />

      <hr className="mt-24" />
      <RecursosPensadosParaSi tipo="no colo" />
      
    </div>
    
  );
}

// eslint-disable-next-line
import React from "react";
import SobreSection from "../components/SobreSection";
import WaveDivider from "../components/WaveDivider";
import TrimestresSection from "../components/TrimestresSection";
import MesamesSection from "../components/MesamesSection";
import ParaVida from "../components/ParaVidaSection";
import RecursosPensadosParaSi from "../components/RecursosPensadosParaSi";

export default function HomePage() {
  return (
    <main>
      <SobreSection />
      <WaveDivider color="gray" />

      <TrimestresSection />
      <RecursosPensadosParaSi cor="gravidez" />
      <WaveDivider />

      <MesamesSection />
      <RecursosPensadosParaSi cor="mes" />
      <WaveDivider />

      <ParaVida />
      <RecursosPensadosParaSi cor="idade" />
      
    </main>
  );
}

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
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <RecursosPensadosParaSi tipo="gravidez" />
      </div>
      <WaveDivider />

      <MesamesSection />
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <RecursosPensadosParaSi tipo="no colo" />
      </div>
      <WaveDivider />

      <ParaVida />
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <RecursosPensadosParaSi tipo="para a vida" />
      </div>
      
    </main>
  );
}

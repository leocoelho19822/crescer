// eslint-disable-next-line
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import HeaderHero from "./components/Header2";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Páginas
import HomePage from "./pages/HomePage";
import ResetPassword from "./components/ResetPassword";
import VerifyEmail from "./components/VerifyEmail";
import MontaArtigo from "./components/MontaArtigo";
import NotFound from "./pages/NotFound";
import PrimeiroTrimestrePage from "./pages/PrimeiroTrimestrePage";
import SegundoTrimestrePage from "./pages/SegundoTrimestrePage";
import TerceiroTrimestrePage from "./pages/TerceiroTrimestrePage";
import WaveDivider from "./components/WaveDivider";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import PrimeiroAno from "./pages/PrimeiroAnoPage";
import SegundoAno from "./pages/SegundoAnoPage";
import TerceiroAno from "./pages/TerceiroAnoPage";
import PrimeiroMes from "./pages/PrimeiroMesPage";
import SegundoMes from "./pages/SegundoMesPage";
import TerceiroMes from "./pages/TerceiroMesPage";
import QuartoMes from "./pages/QuartoMesPage";
import QuintoMes from "./pages/QuintoMesPage";
import SextoMes from "./pages/SextoMesPage";
import SetimoMes from "./pages/SetimoMesPage";
import OitavoMes from "./pages/OitavoMesPage";
import NonoMes from "./pages/NonoMesPage";
import DecimoMes from "./pages/DecimoMesPage";
import DecimoPrimeiroMes from "./pages/DecimoPrimeiroMesPage";
import RecemNascido from "./pages/RecemNascidoPage";
import Eventos from "./pages/EventosPage";
import MesaMes from "./pages/MesAMesPage";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <HeaderHero />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/artigos/:id" element={<MontaArtigo />} />
        <Route path="/1tri" element={<PrimeiroTrimestrePage />} />
        <Route path="/2tri" element={<SegundoTrimestrePage />} />
        <Route path="/3tri" element={<TerceiroTrimestrePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/equipa" element={<TeamPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/politica" element={<PrivacyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/mesames" element={<MesaMes />} />
        <Route path="/recemnascido" element={<RecemNascido />} />
        <Route path="/1ano" element={<PrimeiroAno />} />
        <Route path="/2ano" element={<SegundoAno />} />
        <Route path="/3ano" element={<TerceiroAno />} />
        <Route path="/1mes" element={<PrimeiroMes />} />
        <Route path="/2mes" element={<SegundoMes />} />
        <Route path="/3mes" element={<TerceiroMes />} />
        <Route path="/4mes" element={<QuartoMes />} />
        <Route path="/5mes" element={<QuintoMes />} />
        <Route path="/6mes" element={<SextoMes />} />
        <Route path="/7mes" element={<SetimoMes />} />
        <Route path="/8mes" element={<OitavoMes />} />
        <Route path="/9mes" element={<NonoMes />} />
        <Route path="/10mes" element={<DecimoMes />} />
        <Route path="/11mes" element={<DecimoPrimeiroMes />} />
        <Route path="/eventos" element={<Eventos />} />


        <Route path="*" element={<NotFound />} />
      </Routes>

      <WaveDivider />
      <Footer />
    </Router>
  );
}

export default App;

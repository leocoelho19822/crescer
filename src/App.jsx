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
        <Route path="/1ano" element={<PrimeiroAno />} />
        <Route path="/2ano" element={<SegundoAno />} />
        <Route path="/3ano" element={<TerceiroAno />} />
        <Route path="/1mes" element={<PrimeiroMes />} />


        <Route path="*" element={<NotFound />} />
      </Routes>

      <WaveDivider />
      <Footer />
    </Router>
  );
}

export default App;

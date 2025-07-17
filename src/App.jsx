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


        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

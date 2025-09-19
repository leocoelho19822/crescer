// eslint-disable-next-line
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import HeaderHero from "./components/Header2";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WaveDivider from "./components/WaveDivider";

// Páginas
import HomePage from "./pages/HomePage";
import ResetPassword from "./components/ResetPassword";
import VerifyEmail from "./components/VerifyEmail";
import MontaArtigo from "./components/MontaArtigo";
import NotFound from "./pages/NotFound";
import Eventos from "./pages/EventosPage";
import MesaMes from "./pages/MesAMesPage";
import MontaPage from "./components/MontaPage";
import SearchResults from "./pages/SearchResults";
import FavoritosPage from "./pages/FavoritosPage";
import LoginAdmin from "./pages/editorial/LoginAdmin";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Rotas com layout padrão */}
        <Route
          path="/*"
          element={
            <>
              <HeaderHero />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/verify-email/:token" element={<VerifyEmail />} />
                <Route path="/artigos/:id" element={<MontaArtigo />} />
                <Route path="/page/:id" element={<MontaPage />} />
                <Route path="/artigo/:id" element={<MontaArtigo />} />
                <Route path="/mesames" element={<MesaMes />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/pesquisa" element={<SearchResults />} />
                <Route path="/favoritos" element={<FavoritosPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <WaveDivider />
              <Footer />
            </>
          }
        />

        {/* Rota sem header/footer */}
        <Route path="/editorial" element={<LoginAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;

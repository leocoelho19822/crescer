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
import Dashboard from "./pages/editorial/Dashboard";
import ArtigosList from "./pages/editorial/ArtigosList";
import ArtigoForm from "./pages/editorial/ArtigoForm";
import EventosList from "./pages/editorial/EventosList";
import EventoForm from "./pages/editorial/EventoForm";
import ArtigoView from "./pages/editorial/ArtigoView";
import UsersList from "./pages/editorial/UserList";
import UserForm from "./pages/editorial/UserForm";
import Atividades from "./pages/AtividadesPage";
import InfoPage from "./pages/InfoPage";
import AdminAttempt from "./pages/editorial/AdminAttempt";

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
              <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/verify-email/:token" element={<VerifyEmail />} />
                <Route path="/artigos/:id" element={<MontaArtigo />} />
                <Route path="/page/:id" element={<MontaPage />} />
                <Route path="/artigo/:id" element={<MontaArtigo />} />
                <Route path="/mesames" element={<MesaMes />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/atividades" element={<Atividades />} />
                <Route path="/infouteis" element={<InfoPage />} />
                <Route path="/pesquisa" element={<SearchResults />} />
                <Route path="/favoritos" element={<FavoritosPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </main>
              <WaveDivider />
              <Footer />
            </>
          }
        />

        {/* Rota sem header/footer para editorial */}
        <Route path="/editorial" element={<LoginAdmin />} />
        <Route path="/editorial/dashboard" element={<Dashboard />} />
        <Route path="/editorial/artigos" element={<ArtigosList />} />
        <Route path="/editorial/eventos" element={<EventosList />} />
        <Route path="/editorial/artigos/novo" element={<ArtigoForm />} />
        <Route path="/editorial/artigos/editar/:id" element={<ArtigoForm />} />
        <Route path="/editorial/eventos/novo" element={<EventoForm />} />
        <Route path="/editorial/eventos/editar/:id" element={<EventoForm />} />
        <Route path="/editorial/artigos/ver/:id" element={<ArtigoView />} />
        <Route path="/editorial/users" element={<UsersList />} />
        <Route path="/editorial/users/novo" element={<UserForm />} />
        <Route path="/editorial/users/editar/:id" element={<UserForm />} />
        <Route path="/admin" element={<AdminAttempt />} />
      </Routes>
    </Router>
  );
}

export default App;

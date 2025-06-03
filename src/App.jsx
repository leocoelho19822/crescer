// eslint-disable-next-line
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CarouselSection from "./components/CarouselSection"; // ✅ Importando a seção do carrossel

import ResetPassword from "./components/ResetPassword";
import VerifyEmail from "./components/VerifyEmail";

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-42 relative z-[1]">
        <CarouselSection />
      </main>
        <Routes>
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
        </Routes>
      
    </Router>
  );
}

export default App;

// eslint-disable-next-line
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CarouselSection from "./components/CarouselSection"; 

import ResetPassword from "./components/ResetPassword";
import VerifyEmail from "./components/VerifyEmail";
import WaveDivider from "./components/WaveDivider";
import SobreSection from "./components/SobreSection";
import Footer from "./components/Footer";
import TrimestresSection from "./components/TrimestresSection";
import MesamesSection from "./components/MesamesSection";
import ParaVida from "./components/ParaVidaSection";


function App() {
  return (
    <Router>
      <Header />
      <main className="mt-36 md:mt-50 relative z-[1]">
        <CarouselSection />
        <WaveDivider />
        <SobreSection />
        <WaveDivider color="gray"/>
        <TrimestresSection />
        <WaveDivider />
        <MesamesSection />
        <WaveDivider />
        <ParaVida />
        <WaveDivider />
        <Footer />
      </main>
        <Routes>
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
        </Routes>
      
    </Router>
  );
}

export default App;

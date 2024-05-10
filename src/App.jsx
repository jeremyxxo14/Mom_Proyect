import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carta from "./components/Carta";
import Inicio from "./components/Inicio";
import Galeria from "./components/Galeria";

// Componente principal de la aplicación
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Inicio/>
        <Routes>

          <Route path="/galeria" element={<Galeria />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carta from "./components/Carta";
import Inicio from "./components/Inicio";
import Galeria from "./components/Galeria";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio onLogin={handleLogin} />} />
          {isLoggedIn && (
            <>
              <Route path="/carta" element={<Carta />} />
              <Route path="/galeria" element={<Galeria />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


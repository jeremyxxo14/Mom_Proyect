import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {

  return (
    <header>
      <NavLink to="/" className="titulo">
        <h1>Feliz día, mamá</h1>
      </NavLink>
      <div className="boton-menu">
        <MenuDesplegable />
      </div>
    </header>
  );
}

function MenuDesplegable() {
    const [menuVisible, setMenuVisible] = React.useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    return (
      <div className="menu-desplegable">
        <button className="boton-menu" onClick={toggleMenu}>
          ☰ Menú
        </button>
        {menuVisible && (
          <div className="opciones-menu">
            <NavLink to="/galeria" onClick={toggleMenu}>
              Galería
            </NavLink>
            <NavLink to="/carta" onClick={toggleMenu}>
              Carta
            </NavLink>
          </div>
        )}
      </div>
    );
  }
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {

  return (
    <header>
      <NavLink to="/inicio" className="titulo">
        <h1>Feliz dia Mamá</h1>
        <img className="img-titulo" src="/cora.png" alt="" />
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
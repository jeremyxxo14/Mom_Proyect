
import React, { useState } from "react";

export default function Galeria() {
  // Array de nombres de archivos de las imágenes (reemplaza con los nombres de tus archivos)
  const imageNames = [
    "[000004].jpg",
    "[000399].jpg",
    "[000315].jpg",
    "[000444].jpg",
    "[000451].jpg",
    "[000460].jpg",
    "[000477].jpg",
    "[000499].jpg",
    "[000923].jpg",
    "[001008].jpg",
    "[001028].jpg",
    "[001400].jpg",
    "[002019].jpg",
    "[002029].jpg",
    "[002030].jpg",
    "[002610].jpg",
    "[002795].jpg",
    "[003623].jpg",
    "[004089].jpg",
    "[009751].jpg",
    "[002792].jpg",
    // Agrega más nombres de archivos según sea necesario
  ];

  return (
    <div className="fondo-generalG">
      <h2>Galería de Fotos</h2>
      <div className="galeria">
        {imageNames.map((imageName, index) => (
          <div className="imagen" key={index}>
            <img src={`/${imageName}`} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
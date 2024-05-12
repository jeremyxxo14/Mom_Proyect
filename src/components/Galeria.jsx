
import React, { useState } from "react";

export default function Galeria() {
  // Array de nombres de archivos de las imágenes (reemplaza con los nombres de tus archivos)
  const fileNames = [
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
    "17.jpg",
    "16.jpg",
    "14.mp4",
    "12.jpg",
    "02.jpg",
    "05.jpg",
    "01.jpg",
    "13.jpg",
    "03.jpg",
    "04.jpg",
    "25.jpg",
    "18.jpg",
    "07.jpg",
    "06.jpg",
    "24.jpg",
    "20.mp4",
    "21.mp4",
    "06.jpg",
    "08.jpg",
    "09.jpg",
    "22.mp4",
    "15.jpg",
    "19.jpg",
    "26.jpg",
    

    // Agrega más nombres de archivos según sea necesario
  ];

  return (
    <div className="fondo-generalG">
      <h2>Galería de Fotos y Videos</h2>
      <div className="galeria">
        {fileNames.map((fileName, index) => {
          const isVideo = fileName.endsWith('.mp4');

          return (
            <div className="imagen" key={index}>
              {isVideo ? (
                <video src={`/${fileName}`} controls alt={`Video ${index + 1}`} />
              ) : (
                <img src={`/${fileName}`} alt={`Imagen ${index + 1}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
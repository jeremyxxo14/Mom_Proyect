import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import Carta from "./Carta";
import Galeria from "./Galeria";

export default function Inicio({ onLogin }) {
  const [nombre, setNombre] = useState("");
  const [plato, setPlato] = useState("");
  const [fechaCumpleaños, setFechaCumpleaños] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate(); // Obtener el objeto history para redirigir


  useEffect(() => {
    // Verificar el estado de inicio de sesión antes de renderizar el componente
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const loginTime = localStorage.getItem('loginTime');
      if (isLoggedIn && loginTime) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - loginTime;
      // Si ha pasado más de una hora (3600000 milisegundos), cerrar la sesión
      if (timeDifference > 3600000) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginTime');
      } else {
        // Si el usuario ha iniciado sesión, redirigir a la página de carta
        navigate("/carta");
      }
  }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar que se haya ingresado un nombre y una fecha de cumpleaños
    if (nombre.trim() === "" || fechaCumpleaños.trim() === "" || plato.trim() ==="") {
      setMensajeError("Por favor ingresa su Nombre y La Fecha Correcta.");
    } else {
      // Aquí puedes verificar si la fecha de cumpleaños y el nombre son correctos
      // Por ejemplo, podrías compararlos con los valores correctos
      const nombreCorrecto = "Fideos con salsa";
      const platoCorrecto = "Fideos con salsa";
      const fechaCumpleañosCorrecta = "2000-09-17"; // Formato de fecha yyyy-mm-dd

      if (nombre === nombreCorrecto && fechaCumpleaños === fechaCumpleañosCorrecta && plato === platoCorrecto ) {
        // Si el nombre y la fecha de cumpleaños son correctos, redirigir a la página de carta
      localStorage.setItem('isLoggedIn', true); // Guardar el estado de inicio de sesión
      navigate("/carta");
      onLogin();
      } else {
        // Si el nombre y/o la fecha de cumpleaños no son correctos, mostrar un mensaje de error
        setMensajeError("El nombre o la fecha de cumpleaños son incorrectos.");
      }
    }
  };

  return (
    <div className="fondo-general">
      <img src="/corazon1.png" alt="Logo" className="logo"/> {/* Aquí agregamos la imagen */}
      <div className="fondo-form">
      <h2></h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input1">
          <label>Soy el plato que más te gusta cocinar para tu hijo. Siempre lo haces con mucho amor y cariño. ¿Qué plato soy?</label>
          <input
            type="text"
            placeholder="Pregunta seria -.-"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="input1">
          <label>Hijo Preferido?</label>
          <input
            type="text"
            placeholder="Solo el Nombre"
            value={plato}
            onChange={(event) => setPlato(event.target.value)}
          />
        </div>
        
        <div className="input1">
          <label>Fecha del Cumpleaños de su Hijo Mayor:</label>
          <input
            type="date"
            placeholder="00/00/00"
            value={fechaCumpleaños}
            onChange={(event) => setFechaCumpleaños(event.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        {mensajeError && <div className="mensaje-error">{mensajeError}</div>}
      </form>
      </div>
    </div>

    
  );
}


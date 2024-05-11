import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";


export default function Inicio({ onLogin }) {
  const [acertijo, setacertijo] = useState("");
  const [hijo, setHijo] = useState("");
  const [fechaCumpleaños, setFechaCumpleaños] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate(); // Obtener el objeto history para redirigir

  useEffect(() => {
    let timer;
    if (mensajeError) {
      timer = setTimeout(() => {
        setMensajeError("");
      }, 5000); // Ocultar el mensaje después de 5 segundos
    }
    return () => clearTimeout(timer);
  }, [mensajeError]);

  useEffect(() => {
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
        navigate("/inicio");
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar que se haya ingresado un nombre y una fecha de cumpleaños
    if (acertijo.trim() === "" || fechaCumpleaños.trim() === "" || hijo.trim() ==="") {
      setMensajeError("Por favor ingresar datos y La Fecha Correcta.");
    } else {
      // Aquí puedes verificar si la fecha de cumpleaños y el nombre son correctos
      // Por ejemplo, podrías compararlos con los valores correctos
      const acertijosCorrectos = ["Fideos con salsa","Fideosconsalsa","Fideos", "Lasaña", "Arroz con pollo","Arroz con pollo al jugo"];
      const hijosCorrectos = ["Jeremy", "Los tres", "Lostres", "los3", "los 3","jeremy"];
      const fechasCumpleañosCorrectas = ["2000-09-17", "17/09/2000"]; // Formato de fecha yyyy-mm-dd
      
      if (acertijosCorrectos.includes(acertijo) && fechasCumpleañosCorrectas.includes(fechaCumpleaños) && hijosCorrectos.includes(hijo)) {
        // Si el nombre y la fecha de cumpleaños son correctos, redirigir a la página de carta
        localStorage.setItem('isLoggedIn', true); // Guardar el estado de inicio de sesión
        localStorage.setItem('loginTime', new Date().getTime()); // Guardar la hora de inicio de sesión
        navigate("/carta");
        onLogin();
      } else {
        // Si el nombre y/o la fecha de cumpleaños no son correctos, mostrar un mensaje de error
        setMensajeError("Las prrguntas o la fecha de cumpleaños son incorrectos.");
      }
    }
  };

  return (
    <div className="fondo-general">
      <img src="/corazon1.png" alt="Logo" className="logo"/> {/* Aquí agregamos la imagen */}
      <div className="fondo-form">
      <h2>Para Ingresar Verifique si es mi Madre con estas "Sencillas Preguntas"</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input1">
          <label>Soy el plato que más te gusta cocinar para tu hijo. Siempre lo haces con mucho amor y cariño. ¿Qué plato soy?</label>
          <input
            type="text"
            placeholder="Pregunta seria -.-"
            value={acertijo}
            onChange={(event) => setacertijo(event.target.value)}
          />
        </div>
        <div className="input1">
          <label>Hijo Preferido?</label>
          <input
            type="text"
            placeholder="Solo el Nombre"
            value={hijo}
            onChange={(event) => setHijo(event.target.value)}
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


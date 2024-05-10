import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

export default function Inicio() {
  const [nombre, setNombre] = useState("");
  const [fechaCumpleaños, setFechaCumpleaños] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate(); // Obtener el objeto history para redirigir

  useEffect(() => {
    let timer;
    if (mensajeError) {
      timer = setTimeout(() => {
        setMensajeError("");
      }, 1000); // Ocultar el mensaje después de 1 segundo
    }
    return () => clearTimeout(timer);
  }, [mensajeError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar que se haya ingresado un nombre y una fecha de cumpleaños
    if (nombre.trim() === "" || fechaCumpleaños.trim() === "") {
      setMensajeError("Por favor ingresa tu nombre y fecha de cumpleaños.");
    } else {
      // Aquí puedes verificar si la fecha de cumpleaños y el nombre son correctos
      // Por ejemplo, podrías compararlos con los valores correctos
      const nombreCorrecto = "Marcela Valenzuela";
      const fechaCumpleañosCorrecta = "2000-09-17"; // Formato de fecha yyyy-mm-dd

      if (nombre === nombreCorrecto && fechaCumpleaños === fechaCumpleañosCorrecta) {
        // Si el nombre y la fecha de cumpleaños son correctos, redirigir a la página de carta
        navigate("/carta");
      } else {
        // Si el nombre y/o la fecha de cumpleaños no son correctos, mostrar un mensaje de error
        setMensajeError("El nombre o la fecha de cumpleaños son incorrectos.");
      }
    }
  };

  return (
    <div className="fondo-general">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="label1">
          <label>Nombre:</label>
        </div>
        <div>
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="label1">
          <label>Fecha de Cumpleaños:</label>
        </div>
        <div>
          <input
            type="date"
            value={fechaCumpleaños}
            onChange={(event) => setFechaCumpleaños(event.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        {mensajeError && <div className="mensaje-error">{mensajeError}</div>}
      </form>
    </div>
  );
}

